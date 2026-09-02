import { Link } from 'react-router-dom'
import { HiArrowLeft } from 'react-icons/hi2'
import { useLanguage } from '../context/LanguageContext'
import PageTransition from '../components/PageTransition'
import './NotFound.css'

export default function NotFound() {
  const { t } = useLanguage()

  return (
    <PageTransition className="notfound">
      <div className="container notfound__inner">
        <p className="notfound__code">404</p>
        <h1 className="notfound__title">{t('notFound.title')}</h1>
        <p className="notfound__text">{t('notFound.description')}</p>
        <Link to="/" className="btn btn--primary">
          <HiArrowLeft aria-hidden="true" /> {t('notFound.back')}
        </Link>
      </div>
    </PageTransition>
  )
}
