import { useState } from 'react'
import { HiArrowRight } from 'react-icons/hi2'
import { FaGithub } from 'react-icons/fa6'
import { useLanguage } from '../context/LanguageContext'
import { projects } from '../data/projects'
import PageTransition from '../components/PageTransition'
import SectionHeader from '../components/SectionHeader'
import Reveal from '../components/Reveal'
import ProjectModal from '../components/ProjectModal'
import './Projects.css'

export default function Projects() {
  const { t, tr } = useLanguage()
  const [selected, setSelected] = useState(null)

  return (
    <PageTransition>
      <section className="section" aria-labelledby="projects-title">
        <div className="container">
          <SectionHeader id="projects-title" title={t('projects.title')} subtitle={t('projects.subtitle')} />


          {/* -------- Linha do tempo -------- */}
          <ol className="timeline">
            {projects.map((project, index) => (
                <li className="timeline__item" key={project.id}>
                  <span className="timeline__marker" aria-hidden="true">
                    <span className="timeline__dot" />
                  </span>

                  <Reveal
                    className="timeline__card card"
                    direction={index % 2 === 0 ? 'right' : 'left'}
                    delay={0.05}
                  >
                    <figure className="timeline__media">
                      <img
                        src={project.gallery[0]}
                        alt={`${tr(project.title)} — ${t('projects.galleryTitle')}`}
                        loading="lazy"
                        width="640"
                        height="360"
                      />
                    </figure>

                    <div className="timeline__content">
                      <div className="timeline__meta">
                        <span className="chip chip--green">{project.period}</span>
                        {project.highlight && <span className="timeline__flag">★</span>}
                      </div>

                      <h2 className="timeline__title">{tr(project.title)}</h2>
                      <p className="timeline__description">{tr(project.description)}</p>

                      <ul className="timeline__tech">
                        {project.tech.map((tech) => (
                          <li className="chip" key={tech}>
                            {tech}
                          </li>
                        ))}
                      </ul>

                      <div className="timeline__actions">
                        <button type="button" className="btn btn--primary btn--sm" onClick={() => setSelected(project)}>
                          {t('projects.viewProject')} <HiArrowRight aria-hidden="true" />
                        </button>
                        <a
                          className="btn btn--ghost btn--sm"
                          href={project.repo}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <FaGithub aria-hidden="true" /> GitHub
                        </a>
                      </div>
                    </div>
                  </Reveal>
                </li>
            ))}
          </ol>
        </div>
      </section>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </PageTransition>
  )
}
