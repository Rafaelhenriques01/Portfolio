import { useState } from 'react'
import { HiArrowRight, HiCheckCircle, HiExclamationTriangle } from 'react-icons/hi2'
import { useLanguage } from '../context/LanguageContext'
import { profile } from '../data/profile'
import './ContactForm.css'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const initialValues = { name: '', email: '', phone: '', message: '' }

export default function ContactForm() {
  const { t } = useLanguage()
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const validate = (data) => {
    const found = {}

    if (!data.name.trim()) found.name = t('contact.errors.nameRequired')
    else if (data.name.trim().length < 3) found.name = t('contact.errors.nameShort')

    if (!data.email.trim()) found.email = t('contact.errors.emailRequired')
    else if (!EMAIL_REGEX.test(data.email.trim())) found.email = t('contact.errors.emailInvalid')

    if (!data.message.trim()) found.message = t('contact.errors.messageRequired')
    else if (data.message.trim().length < 10) found.message = t('contact.errors.messageShort')

    return found
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }))
  }

  const handleBlur = (event) => {
    const { name } = event.target
    const found = validate(values)
    setErrors((current) => ({ ...current, [name]: found[name] }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) return

    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })

      if (!response.ok) throw new Error(`Falha no envio (${response.status})`)

      setStatus('success')
      setValues(initialValues)
    } catch (error) {
      console.error('[contato] erro ao enviar mensagem:', error)
      setStatus('error')
    }
  }

  /** Link de fallback: abre o app de e-mail do visitante com a mensagem pronta. */
  const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    `[Portfólio] Contato de ${values.name || '...'}`,
  )}&body=${encodeURIComponent(`${values.message}\n\n---\n${values.name} — ${values.email} ${values.phone}`)}`

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <h2 className="form__title">{t('contact.formTitle')}</h2>

      <div className="form__field">
        <label htmlFor="name">{t('contact.name')}</label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={t('contact.namePlaceholder')}
          className={errors.name ? 'has-error' : ''}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'name-error' : undefined}
          autoComplete="name"
          required
        />
        {errors.name && (
          <span className="form__error" id="name-error" role="alert">
            {errors.name}
          </span>
        )}
      </div>

      <div className="form__field">
        <label htmlFor="email">{t('contact.email')}</label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={t('contact.emailPlaceholder')}
          className={errors.email ? 'has-error' : ''}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
          autoComplete="email"
          required
        />
        {errors.email && (
          <span className="form__error" id="email-error" role="alert">
            {errors.email}
          </span>
        )}
      </div>

      <div className="form__field">
        <label htmlFor="phone">{t('contact.phone')}</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={handleChange}
          placeholder={t('contact.phonePlaceholder')}
          autoComplete="tel"
        />
      </div>

      <div className="form__field">
        <label htmlFor="message">{t('contact.message')}</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={t('contact.messagePlaceholder')}
          className={errors.message ? 'has-error' : ''}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          required
        />
        {errors.message && (
          <span className="form__error" id="message-error" role="alert">
            {errors.message}
          </span>
        )}
      </div>

      <button type="submit" className="btn btn--primary btn--block" disabled={status === 'loading'}>
        {status === 'loading' ? t('contact.sending') : t('contact.send')}
        {status !== 'loading' && <HiArrowRight aria-hidden="true" />}
      </button>

      <div className="form__status" aria-live="polite">
        {status === 'success' && (
          <p className="form__message form__message--success">
            <HiCheckCircle aria-hidden="true" /> {t('contact.success')}
          </p>
        )}
        {status === 'error' && (
          <p className="form__message form__message--error">
            <HiExclamationTriangle aria-hidden="true" /> {t('contact.error')}{' '}
            <a href={mailtoHref}>{t('contact.fallback')}</a>
          </p>
        )}
      </div>
    </form>
  )
}
