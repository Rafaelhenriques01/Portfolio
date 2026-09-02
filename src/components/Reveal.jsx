import { motion } from 'framer-motion'

const directions = {
  up: { y: 32, x: 0 },
  down: { y: -32, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
}

/**
 * Anima o conteudo quando ele entra na tela (scroll reveal).
 * Uso: <Reveal delay={0.1} direction="up">...</Reveal>
 */
export default function Reveal({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.55,
  className = '',
  as = 'div',
  amount = 0.2,
  ...rest
}) {
  const MotionTag = motion[as] ?? motion.div
  const offset = directions[direction] ?? directions.up

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
