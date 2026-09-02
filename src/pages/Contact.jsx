import { useState } from 'react'
import { HiOutlineClipboardDocument, HiCheck } from 'react-icons/hi2'
import { useLanguage } from '../context/LanguageContext'
import { profile } from '../data/profile'
import { socialLinks } from '../components/SocialLinks'
import PageTransition from '../components/PageTransition'
import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'
import ContactForm from '../components/ContactForm'
import './Contact.css'

export default function Contact() {
  const { t } = useLanguage()
  const [copied, setCopied] = useState(null)

  const copy = async (id, text) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(id)
      setTimeout(() => setCopied(null), 2000)
    } catch {
      /* navegador sem permissao de clipboard - ignora silenciosamente */
    }
  }

  return (
    <PageTransition>
      <section className="section" aria-labelledby="contact-title">
        <div className="container">
          <SectionHeader id="contact-title" title={t('contact.title')} subtitle={t('contact.subtitle')} />

          <div className="contact__grid">
            {/* ---------------- Canais diretos ---------------- */}
            <Reveal className="contact__channels" direction="right">
              <h2 className="contact__heading">{t('contact.channels')}</h2>

              <ul className="contact__list">
                {socialLinks.map(({ id, label, href, Icon, value }, index) => (
                  <li className="card contact__item" key={id} style={{ '--delay': `${index * 60}ms` }}>
                    <a
                      href={href}
                      className="contact__link"
                      target={href.startsWith('mailto:') ? undefined : '_blank'}
                      rel="noreferrer noopener"
                    >
                      <span className="contact__icon">
                        <Icon size={20} aria-hidden="true" />
                      </span>
                      <span className="contact__info">
                        <strong>{label}</strong>
                        <span>{value}</span>
                      </span>
                    </a>

                    {(id === 'email' || id === 'whatsapp') && (
                      <button
                        type="button"
                        className="contact__copy"
                        onClick={() => copy(id, id === 'email' ? profile.email : profile.phone)}
                        aria-label={`${t('contact.copy')} ${label}`}
                        title={copied === id ? t('contact.copied') : t('contact.copy')}
                      >
                        {copied === id ? <HiCheck size={18} /> : <HiOutlineClipboardDocument size={18} />}
                      </button>
                    )}
                  </li>
                ))}
              </ul>

            </Reveal>

            {/* ---------------- Formulario ---------------- */}
            <Reveal className="contact__form" direction="left" delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
