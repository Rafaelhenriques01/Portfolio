import { useLanguage } from '../context/LanguageContext'
import SocialLinks from './SocialLinks'
import { profile } from '../data/profile'
import './Footer.css'

export default function Footer() {
  const { t, tr } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <p className="footer__name">{profile.name}</p>
          <p className="footer__role">{tr(profile.role)}</p>
        </div>

        <div className="footer__social">
          <h2 className="footer__heading">{t('footer.social')}</h2>
          <SocialLinks size={20} />
        </div>
      </div>

      <div className="footer__bottom container">
        <p>
          © {year} {profile.name}. {t('footer.rights')}
        </p>
      </div>
    </footer>
  )
}
