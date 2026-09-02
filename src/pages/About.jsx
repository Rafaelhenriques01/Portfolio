import { Link } from 'react-router-dom'
import { HiArrowRight, HiOutlineAcademicCap, HiOutlineFlag, HiOutlineSparkles } from 'react-icons/hi2'
import { FaCode, FaDatabase, FaPenRuler, FaGears, FaUsers } from 'react-icons/fa6'
import { useLanguage } from '../context/LanguageContext'
import { about, profile, skills } from '../data/profile'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import './About.css'

const FALLBACK_AVATAR = '/images/avatar.svg'

const skillIcons = { code: FaCode, database: FaDatabase, design: FaPenRuler, tools: FaGears, people: FaUsers }

export default function About() {
  const { t, tr } = useLanguage()

  return (
    <PageTransition>
      {/* ---------------------------------------------------------- HERO */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__inner container">
          <Reveal className="hero__content" direction="right">
            <p className="hero__greeting">{t('hero.greeting')}</p>
            <h1 className="hero__title" id="hero-title">
              {profile.name}
            </h1>
            <p className="hero__role">{tr(profile.role)}</p>
            <p className="hero__headline">{tr(profile.headline)}</p>
            <p className="hero__text">{tr(about.intro)}</p>

            <div className="hero__actions">
              <Link to="/projetos" className="btn btn--primary">
                {t('hero.cta')} <HiArrowRight aria-hidden="true" />
              </Link>
              <Link to="/contato" className="btn btn--ghost">
                {t('nav.contact')}
              </Link>
            </div>
          </Reveal>

          <Reveal className="hero__figure" direction="left" delay={0.15}>
            <div className="hero__avatar-glow" aria-hidden="true" />
            <div className="hero__avatar-ring" aria-hidden="true" />
            <img
              src={profile.photo ?? FALLBACK_AVATAR}
              alt={`${profile.name} — ${tr(profile.role)}`}
              className="hero__avatar"
              style={{ objectPosition: profile.photoPosition }}
              width="380"
              height="380"
              onError={(event) => {
                // Enquanto a foto real nao existir, volta para o avatar ilustrado
                if (event.currentTarget.dataset.fallback) return
                event.currentTarget.dataset.fallback = 'true'
                event.currentTarget.src = FALLBACK_AVATAR
                event.currentTarget.classList.add('is-placeholder')
              }}
            />
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------- SOBRE MIM */}
      <section className="section about" aria-labelledby="about-title">
        <div className="container">
          <Reveal className="section__header" as="header">
            <h2 className="section__title" id="about-title">
              {t('about.title')}
            </h2>
            <p className="section__subtitle">{t('about.subtitle')}</p>
            <span className="section__rule" aria-hidden="true" />
          </Reveal>

          <div className="about__grid">
            <Reveal className="about__bio" direction="right">
              {tr(about.paragraphs).map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
              {profile.resume && (
                <a className="btn btn--outline btn--sm about__resume" href={profile.resume} download>
                  {t('hero.resume')}
                </a>
              )}
            </Reveal>

            <div className="about__cards">
              <Reveal className="card about__card" direction="left" delay={0.05}>
                <HiOutlineAcademicCap className="about__card-icon" aria-hidden="true" />
                <h3>{t('about.educationTitle')}</h3>
                <p className="about__card-main">{tr(about.education.course)}</p>
                <p className="about__card-sub">{about.education.school}</p>
                <span className="chip chip--green">{tr(about.education.period)}</span>
              </Reveal>

              <Reveal className="card about__card" direction="left" delay={0.12}>
                <HiOutlineSparkles className="about__card-icon" aria-hidden="true" />
                <h3>{t('about.interestsTitle')}</h3>
                <ul className="about__interests">
                  {tr(about.interests).map((interest) => (
                    <li key={interest}>{interest}</li>
                  ))}
                </ul>
              </Reveal>

              <Reveal className="card about__card" direction="left" delay={0.19}>
                <HiOutlineFlag className="about__card-icon" aria-hidden="true" />
                <h3>{t('about.goalsTitle')}</h3>
                <p className="about__card-sub">{tr(about.goals)}</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- SKILLS */}
      <section className="section section--tight skills" aria-labelledby="skills-title">
        <div className="container">
          <Reveal className="section__header" as="header">
            <h2 className="section__title" id="skills-title">
              {t('about.skillsTitle')}
            </h2>
            <p className="section__subtitle">{t('about.skillsSubtitle')}</p>
            <span className="section__rule" aria-hidden="true" />
          </Reveal>

          <div className="skills__grid">
            {skills.map((group, index) => {
              const Icon = skillIcons[group.icon] ?? FaCode
              return (
                <Reveal className="card skills__card" key={group.key} delay={index * 0.08}>
                  <div className="skills__card-head">
                    <span className="skills__icon">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <h3>{tr(group.title)}</h3>
                  </div>
                  <ul className="skills__list">
                    {tr(group.items).map((item) => (
                      <li className="chip" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
