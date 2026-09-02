import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { HiBars3, HiXMark } from 'react-icons/hi2'
import { useLanguage } from '../context/LanguageContext'
import SocialLinks from './SocialLinks'
import './Navbar.css'

const navItems = [
  { to: '/', labelKey: 'nav.about', end: true },
  { to: '/projetos', labelKey: 'nav.projects' },
  { to: '/experiencias', labelKey: 'nav.experience' },
  { to: '/contato', labelKey: 'nav.contact' },
]

export default function Navbar() {
  const { t, lang, toggleLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  // Fecha o menu mobile ao trocar de pagina
  useEffect(() => setIsOpen(false), [location.pathname])

  // Sombra/blur do header apos rolar a pagina
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Trava o scroll do body e permite fechar com ESC quando o menu esta aberto
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    const onKeyDown = (event) => event.key === 'Escape' && setIsOpen(false)
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen])

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__inner container" aria-label={t('nav.menu')}>
        <ul className={`navbar__links ${isOpen ? 'is-open' : ''}`}>
          {navItems.map(({ to, labelKey, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) => `navbar__link ${isActive ? 'is-active' : ''}`}
              >
                {t(labelKey)}
              </NavLink>
            </li>
          ))}

          <li className="navbar__mobile-extras">
            <SocialLinks className="social--nav" size={20} />
          </li>
        </ul>

        <div className="navbar__actions">
          <SocialLinks className="social--nav navbar__social" size={18} />

          <button
            type="button"
            className="navbar__lang"
            onClick={toggleLanguage}
            aria-label={t('nav.language')}
            title={t('nav.language')}
          >
            <span className={lang === 'pt' ? 'is-current' : ''}>PT</span>
            <span className="navbar__lang-sep">/</span>
            <span className={lang === 'en' ? 'is-current' : ''}>EN</span>
          </button>

          <button
            type="button"
            className="navbar__toggle"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-label={isOpen ? t('nav.close') : t('nav.menu')}
          >
            {isOpen ? <HiXMark size={26} /> : <HiBars3 size={26} />}
          </button>
        </div>
      </nav>

      {isOpen && <button className="navbar__overlay" aria-hidden="true" tabIndex={-1} onClick={() => setIsOpen(false)} />}
    </header>
  )
}
