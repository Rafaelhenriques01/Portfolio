import { motion } from 'framer-motion'

/** Envolve cada pagina com um fade suave na troca de rota. */
export default function PageTransition({ children, className = '' }) {
  return (
    <motion.main
      id="conteudo"
      className={`page ${className}`}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  )
}
