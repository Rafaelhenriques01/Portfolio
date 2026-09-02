import Reveal from './Reveal'

/** Cabecalho padrao das secoes: titulo + subtitulo centralizados. */
export default function SectionHeader({ title, subtitle, id }) {
  return (
    <Reveal className="section__header" as="header">
      <h1 className="section__title" id={id}>
        {title}
      </h1>
      {subtitle && <p className="section__subtitle">{subtitle}</p>}
      <span className="section__rule" aria-hidden="true" />
    </Reveal>
  )
}
