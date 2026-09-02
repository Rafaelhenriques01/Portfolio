import { Link } from 'react-router-dom'
import { HiArrowUp } from 'react-icons/hi2'
import { useLanguage } from '../context/LanguageContext'
import SocialLinks from './SocialLinks'
import { profile } from '../data/profile'
import './Footer.css'

const links = [
  { to: '/', labelKey: 'nav.about' },
  { to: '/projetos', labelKey: 'nav.projects' },
  { to: '/experiencias', labelKey: 'nav.experience' },
  { to: '/contato', labelKey: 'nav.contact' },
]

export default function Footer() {
  const { t, tr } = useLanguage()
  const year = new Date().getFullYear()

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <span className="footer__logo">{profile.initials}</span>
          <div>
            <p className="footer__name">{profile.name}</p>
            <p className="footer__role">{tr(profile.role)}</p>
          </div>
        </div>

        <nav className="footer__nav" aria-label={t('footer.navigation')}>
          <h2 className="footer__heading">{t('footer.navigation')}</h2>
          <ul>
            {links.map(({ to, labelKey }) => (
              <li key={to}>
                <Link to={to} className="footer__link">
                  {t(labelKey)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__social">
          <h2 className="footer__heading">{t('footer.social')}</h2>
          <SocialLinks size={20} />
          <a href={`mailto:${profile.email}`} className="footer__email">
            {profile.email}
          </a>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>
          © {year} {profile.name}. {t('footer.rights')}
        </p>
        <p className="footer__built">{t('footer.builtWith')}</p>
        <button type="button" className="footer__top" onClick={scrollToTop} aria-label={t('footer.backToTop')}>
          <HiArrowUp size={18} aria-hidden="true" />
        </button>
      </div>
    </footer>
  )
}
