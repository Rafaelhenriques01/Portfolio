/**
 * ---------------------------------------------------------------------------
 * POST /api/contact  —  Serverless Function (Vercel)
 * ---------------------------------------------------------------------------
 * Recebe os dados do formulario de contato, valida e higieniza no servidor,
 * limita a frequencia de envios e despacha o e-mail por SMTP (ou pelo Resend,
 * conforme as variaveis de ambiente presentes — ver .env.example).
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const MAX_LENGTHS = { name: 120, email: 160, phone: 40, message: 4000 }

/**
 * Remove quebras de linha e caracteres de controle.
 * Nome, e-mail e telefone entram no assunto e no Reply-To da mensagem; um
 * \r\n nesses campos permitiria acrescentar cabecalhos ao e-mail (injecao de
 * cabecalho SMTP) e alimenta o analisador de enderecos com entrada malformada.
 */
function limparCampo(valor) {
  // eslint-disable-next-line no-control-regex
  return String(valor ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim()
}

/** Escapa HTML para evitar injecao de marcacao no corpo do e-mail. */
function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

/**
 * Limite simples de envios por origem: 3 mensagens a cada 10 minutos.
 * O registro vive na memoria da instancia; como a Vercel reaproveita instancias
 * quentes, isso ja barra o caso comum de alguem disparar o endpoint em serie.
 */
const JANELA_MS = 10 * 60 * 1000
const MAX_POR_JANELA = 3
const historico = new Map()

function excedeuLimite(origem) {
  const agora = Date.now()
  const anteriores = (historico.get(origem) ?? []).filter((t) => agora - t < JANELA_MS)

  if (anteriores.length >= MAX_POR_JANELA) {
    historico.set(origem, anteriores)
    return true
  }

  anteriores.push(agora)
  historico.set(origem, anteriores)

  // Evita crescimento indefinido do mapa em instancias de vida longa
  if (historico.size > 500) {
    for (const [chave, marcas] of historico) {
      if (marcas.every((t) => agora - t >= JANELA_MS)) historico.delete(chave)
    }
  }

  return false
}

/** Valida o payload recebido do formulario. */
export function validatePayload(body = {}) {
  const errors = []
  const name = limparCampo(body.name)
  const email = limparCampo(body.email)
  const phone = limparCampo(body.phone)
  // A mensagem pode ter quebras de linha: ela vai no corpo, nao em cabecalho
  const message = String(body.message ?? '').replace(/\r\n/g, '\n').trim()

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

  let body
  try {
    body = typeof request.body === 'string' ? JSON.parse(request.body || '{}') : (request.body ?? {})
  } catch {
    return response.status(400).json({ ok: false, error: 'Dados inválidos.' })
  }

  // Armadilha para robos: o campo fica escondido no formulario, entao so um
  // preenchedor automatico o completa. Respondemos sucesso e descartamos.
  if (typeof body.website === 'string' && body.website.trim() !== '') {
    return response.status(200).json({ ok: true })
  }

  const origem =
    (request.headers?.['x-forwarded-for'] ?? '').split(',')[0].trim() ||
    request.socket?.remoteAddress ||
    'desconhecida'

  if (excedeuLimite(origem)) {
    response.setHeader('Retry-After', '600')
    return response
      .status(429)
      .json({ ok: false, error: 'Muitas mensagens enviadas. Tente novamente em alguns minutos.' })
  }

  const { errors, data } = validatePayload(body)

  if (errors.length > 0) {
    return response.status(400).json({ ok: false, error: 'Dados inválidos.', fields: errors })
  }

  const to = process.env.CONTACT_TO_EMAIL

  if (!to) {
    console.error('[api/contact] CONTACT_TO_EMAIL nao configurado.')
    return response.status(503).json({ ok: false, error: 'Serviço de e-mail não configurado.' })
  }

  try {
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await enviarPorSmtp(data, to)
    } else if (process.env.RESEND_API_KEY) {
      await enviarPorResend(data, to)
    } else {
      console.error('[api/contact] nenhum provedor de e-mail configurado.')
      return response.status(503).json({ ok: false, error: 'Serviço de e-mail não configurado.' })
    }

    return response.status(200).json({ ok: true })
  } catch (error) {
    console.error('[api/contact] falha no envio:', error)
    return response.status(502).json({ ok: false, error: 'Não foi possível enviar o e-mail.' })
  }
}

/**
 * Envio por SMTP (Gmail com "Senha de app", ou qualquer outro servidor).
 * Variaveis: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
 */
async function enviarPorSmtp(data, to) {
  const { default: nodemailer } = await import('nodemailer')

  const port = Number(process.env.SMTP_PORT || 465)
  const transporte = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port,
    secure: port === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  })

  await transporte.sendMail({
    // O Gmail exige que o remetente seja a propria conta autenticada
    from: `"Portfólio" <${process.env.SMTP_USER}>`,
    to,
    replyTo: `"${data.name}" <${data.email}>`,
    subject: `[Portfólio] Nova mensagem de ${data.name}`,
    html: buildHtml(data),
    text: `Nome: ${data.name}
E-mail: ${data.email}
Telefone: ${data.phone}

${data.message}`,
  })
}

/** Envio pela API do Resend. Variaveis: RESEND_API_KEY, CONTACT_FROM_EMAIL */
async function enviarPorResend(data, to) {
  const resposta = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || 'Portfolio <onboarding@resend.dev>',
      to: [to],
      reply_to: data.email,
      subject: `[Portfólio] Nova mensagem de ${data.name}`,
      html: buildHtml(data),
      text: `Nome: ${data.name}
E-mail: ${data.email}
Telefone: ${data.phone}

${data.message}`,
    }),
  })

  if (!resposta.ok) {
    throw new Error(`Resend respondeu ${resposta.status}: ${await resposta.text()}`)
  }
}
