/**
 * ---------------------------------------------------------------------------
 * POST /api/contact  —  Serverless Function (Vercel)
 * ---------------------------------------------------------------------------
 * Recebe os dados do formulario de contato, valida no servidor e envia o
 * e-mail atraves da API do Resend (https://resend.com — plano gratuito).
 *
 * Variaveis de ambiente necessarias (ver .env.example):
 *   RESEND_API_KEY      chave da API do Resend
 *   CONTACT_TO_EMAIL    e-mail que recebe as mensagens
 *   CONTACT_FROM_EMAIL  remetente (ex: "Portfolio <onboarding@resend.dev>")
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const MAX_LENGTHS = { name: 120, email: 160, phone: 40, message: 4000 }

/** Escapa HTML para evitar injecao de marcacao no corpo do e-mail. */
function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

/** Valida o payload recebido do formulario. */
export function validatePayload(body = {}) {
  const errors = []
  const name = String(body.name ?? '').trim()
  const email = String(body.email ?? '').trim()
  const phone = String(body.phone ?? '').trim()
  const message = String(body.message ?? '').trim()

  if (name.length < 3) errors.push('name')
  if (!EMAIL_REGEX.test(email)) errors.push('email')
  if (message.length < 10) errors.push('message')

  if (name.length > MAX_LENGTHS.name) errors.push('name')
  if (email.length > MAX_LENGTHS.email) errors.push('email')
  if (phone.length > MAX_LENGTHS.phone) errors.push('phone')
  if (message.length > MAX_LENGTHS.message) errors.push('message')

  return { errors, data: { name, email, phone, message } }
}

function buildHtml({ name, email, phone, message }) {
  return `
    <div style="font-family:Arial,Helvetica,sans-serif;background:#0a0a0a;padding:24px;color:#f5f5f5">
      <div style="max-width:560px;margin:0 auto;background:#161616;border:1px solid #2a2a2a;border-radius:12px;overflow:hidden">
        <div style="background:#22c55e;color:#04140a;padding:16px 24px;font-weight:bold;font-size:16px">
          Nova mensagem pelo portfólio
        </div>
        <div style="padding:24px;line-height:1.7;font-size:14px">
          <p><strong style="color:#22c55e">Nome:</strong> ${escapeHtml(name)}</p>
          <p><strong style="color:#22c55e">E-mail:</strong> ${escapeHtml(email)}</p>
          ${phone ? `<p><strong style="color:#22c55e">Telefone:</strong> ${escapeHtml(phone)}</p>` : ''}
          <p style="margin-top:16px"><strong style="color:#22c55e">Mensagem:</strong></p>
          <p style="white-space:pre-wrap;background:#0a0a0a;border-left:3px solid #22c55e;padding:12px 16px;border-radius:6px">${escapeHtml(message)}</p>
        </div>
      </div>
    </div>`
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return response.status(405).json({ ok: false, error: 'Método não permitido.' })
  }

  const body = typeof request.body === 'string' ? JSON.parse(request.body || '{}') : (request.body ?? {})
  const { errors, data } = validatePayload(body)

  if (errors.length > 0) {
    return response.status(400).json({ ok: false, error: 'Dados inválidos.', fields: errors })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  const from = process.env.CONTACT_FROM_EMAIL || 'Portfolio <onboarding@resend.dev>'

  if (!apiKey || !to) {
    console.error('[api/contact] RESEND_API_KEY ou CONTACT_TO_EMAIL nao configurados.')
    return response.status(503).json({ ok: false, error: 'Serviço de e-mail não configurado.' })
  }

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject: `[Portfólio] Nova mensagem de ${data.name}`,
        html: buildHtml(data),
        text: `Nome: ${data.name}\nE-mail: ${data.email}\nTelefone: ${data.phone}\n\n${data.message}`,
      }),
    })

    if (!resendResponse.ok) {
      const detail = await resendResponse.text()
      console.error('[api/contact] Resend respondeu com erro:', resendResponse.status, detail)
      return response.status(502).json({ ok: false, error: 'Não foi possível enviar o e-mail.' })
    }

    return response.status(200).json({ ok: true })
  } catch (error) {
    console.error('[api/contact] Erro inesperado:', error)
    return response.status(500).json({ ok: false, error: 'Erro interno ao enviar a mensagem.' })
  }
}
