import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiChevronDown, HiOutlineBriefcase, HiOutlineMapPin } from 'react-icons/hi2'
import { useLanguage } from '../context/LanguageContext'
import { experiences } from '../data/experiences'
import PageTransition from '../components/PageTransition'
import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'
import './Experience.css'

export default function Experience() {
  const { t, tr } = useLanguage()
  const [expanded, setExpanded] = useState(experiences[0]?.id ?? null)

  const toggle = (id) => setExpanded((current) => (current === id ? null : id))

  return (
    <PageTransition>
      <section className="section" aria-labelledby="experience-title">
        <div className="container">
          <SectionHeader id="experience-title" title={t('experience.title')} subtitle={t('experience.subtitle')} />

          <div className="experience__list">
            {experiences.map((item, index) => {
              const isOpen = expanded === item.id

              return (
                <Reveal className={`card experience__card ${isOpen ? 'is-open' : ''}`} key={item.id} delay={index * 0.08}>
                  <figure className="experience__media">
                    <img
                      src={item.image}
                      alt={`${item.company} — ${tr(item.role)}`}
                      loading="lazy"
                      width="480"
                      height="300"
                    />
                    {item.current && <span className="experience__badge">{t('experience.current')}</span>}
                  </figure>

                  <div className="experience__content">
                    <span className="chip chip--green experience__type">{tr(item.type)}</span>

                    <h2 className="experience__company">{item.company}</h2>
                    <p className="experience__role">
                      <HiOutlineBriefcase aria-hidden="true" /> {tr(item.role)}
                    </p>
                    <p className="experience__period">
                      <HiOutlineMapPin aria-hidden="true" /> {tr(item.organization)} · {item.location}
                    </p>
                    <p className="experience__dates">{tr(item.period)}</p>

                    <p className="experience__description">{tr(item.description)}</p>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          className="experience__details"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <h3 className="experience__subtitle">{t('experience.activities')}</h3>
                          <ul className="experience__activities">
                            {tr(item.activities).map((activity) => (
                              <li key={activity}>{activity}</li>
                            ))}
                          </ul>

                          <ul className="experience__tech">
                            {item.tech.map((tech) => (
                              <li className="chip" key={tech}>
                                {tech}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <button
                      type="button"
                      className="btn btn--outline btn--sm experience__toggle"
                      onClick={() => toggle(item.id)}
                      aria-expanded={isOpen}
                    >
                      {isOpen ? t('experience.readLess') : t('experience.readMore')}
                      <HiChevronDown className={`experience__chevron ${isOpen ? 'is-open' : ''}`} aria-hidden="true" />
                    </button>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
