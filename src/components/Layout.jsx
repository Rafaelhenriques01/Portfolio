import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import { useLanguage } from '../context/LanguageContext'

/** Estrutura base: cabecalho fixo + area de conteudo + rodape. */
export default function Layout() {
  const location = useLocation()
  const { lang } = useLanguage()

  return (
    <>
      <a className="skip-link" href="#conteudo">
        {lang === 'pt' ? 'Pular para o conteúdo' : 'Skip to content'}
      </a>
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Outlet key={`${location.pathname}-${lang}`} />
      </AnimatePresence>
      <Footer />
    </>
  )
}
