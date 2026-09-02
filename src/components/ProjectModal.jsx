import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { HiChevronLeft, HiChevronRight, HiXMark, HiArrowTopRightOnSquare, HiLockClosed } from 'react-icons/hi2'
import { FaGithub } from 'react-icons/fa6'
import { useLanguage } from '../context/LanguageContext'
import './ProjectModal.css'

/** Modal com galeria (carrossel) de imagens/GIFs e detalhes do projeto. */
export default function ProjectModal({ project, onClose }) {
  const { t, tr } = useLanguage()
  const [index, setIndex] = useState(0)

  const gallery = project?.gallery ?? []
  const total = gallery.length

  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total])
  const previous = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total])

  useEffect(() => {
    setIndex(0)
  }, [project?.id])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight' && total > 1) next()
      if (event.key === 'ArrowLeft' && total > 1) previous()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [next, previous, onClose, total])

  if (!project) return null

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(event) => event.target === event.currentTarget && onClose()}
      >
        <motion.div
          className="modal__panel"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 10 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <button type="button" className="modal__close" onClick={onClose} aria-label={t('projects.closeModal')}>
            <HiXMark size={22} />
          </button>

          <div className="modal__gallery">
            <img src={gallery[index]} alt={`${tr(project.title)} — ${index + 1}`} className="modal__image" />

            {total > 1 && (
              <>
                <button type="button" className="modal__nav modal__nav--prev" onClick={previous} aria-label={t('projects.previous')}>
                  <HiChevronLeft size={24} />
                </button>
                <button type="button" className="modal__nav modal__nav--next" onClick={next} aria-label={t('projects.next')}>
                  <HiChevronRight size={24} />
                </button>
                <div className="modal__dots" role="tablist">
                  {gallery.map((image, dotIndex) => (
                    <button
                      key={image}
                      type="button"
                      className={`modal__dot ${dotIndex === index ? 'is-active' : ''}`}
                      onClick={() => setIndex(dotIndex)}
                      aria-label={`${dotIndex + 1} ${t('projects.slideOf')} ${total}`}
                      aria-selected={dotIndex === index}
                      role="tab"
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="modal__body">
            <header className="modal__head">
              <span className="chip chip--green">{project.period}</span>
              <h2 id="modal-title">{tr(project.title)}</h2>
            </header>

            <p className="modal__description">{tr(project.description)}</p>

            <h3 className="modal__subtitle">{t('projects.features')}</h3>
            <ul className="modal__features">
              {tr(project.features).map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            {project.role && (
              <>
                <h3 className="modal__subtitle">{t('projects.role')}</h3>
                <ul className="modal__features">
                  {tr(project.role).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            <h3 className="modal__subtitle">{t('projects.technologies')}</h3>
            <ul className="modal__tech">
              {project.tech.map((tech) => (
                <li className="chip" key={tech}>
                  {tech}
                </li>
              ))}
            </ul>

            <div className="modal__actions">
              {project.repo ? (
                <a className="btn btn--primary btn--sm" href={project.repo} target="_blank" rel="noreferrer noopener">
                  <FaGithub aria-hidden="true" /> {t('projects.repository')}
                </a>
              ) : (
                <p className="modal__private">
                  <HiLockClosed aria-hidden="true" />
                  <span>
                    <strong>{t('projects.privateRepo')}</strong>
                    {t('projects.privateRepoNote')}
                  </span>
                </p>
              )}
              {project.demo && (
                <a className="btn btn--ghost btn--sm" href={project.demo} target="_blank" rel="noreferrer noopener">
                  <HiArrowTopRightOnSquare aria-hidden="true" /> {t('projects.liveDemo')}
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body,
  )
}
