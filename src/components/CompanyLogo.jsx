import './CompanyLogo.css'

/**
 * Painel com a logo da empresa/instituicao.
 *
 * Campos aceitos em `logo` (ver src/data/experiences.js):
 *   src      caminho da imagem em /public/images
 *   alt      texto alternativo
 *   invert   true para logos pretas (aplica filtro e deixa branca no tema escuro)
 *   rounded  true para logos ja circulares (recorta em circulo)
 *   scale    0 a 1 - quanto da area a logo ocupa
 *   tint     cor RGB do brilho de fundo, ex: '34, 197, 94'
 */
export default function CompanyLogo({ logo, fallback = '' }) {
  if (!logo?.src) {
    return (
      <div className="logo-panel">
        <span className="logo-panel__fallback">{fallback}</span>
      </div>
    )
  }

  const { src, alt, invert, rounded, scale = 0.6, tint = '34, 197, 94' } = logo

  return (
    <div className="logo-panel" style={{ '--tint': tint }}>
      <span className="logo-panel__glow" aria-hidden="true" />
      <span className={`logo-panel__frame ${rounded ? 'is-rounded' : ''}`}>
        <img
          src={src}
          alt={alt}
          className={`logo-panel__img ${invert ? 'is-inverted' : ''}`}
          style={{ '--scale': scale }}
          loading="lazy"
        />
      </span>
    </div>
  )
}
