import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Sempre inicia a nova pagina no topo ao navegar entre rotas. */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])

  return null
}
