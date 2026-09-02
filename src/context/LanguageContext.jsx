import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from '../i18n/translations'

const STORAGE_KEY = 'portfolio:lang'

const LanguageContext = createContext(null)

/** Le o idioma salvo ou usa o idioma do navegador como padrao. */
function getInitialLanguage() {
  if (typeof window === 'undefined') return 'pt'
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'pt' || saved === 'en') return saved
  } catch {
    /* localStorage indisponivel (modo privado) - segue com o padrao */
  }
  const browser = window.navigator?.language ?? 'pt'
  return browser.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLanguage)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* ignora falha de escrita */
    }
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en-US'
  }, [lang])

  const toggleLanguage = useCallback(() => {
    setLang((current) => (current === 'pt' ? 'en' : 'pt'))
  }, [])

  /** t('contact.errors.emailInvalid') -> string traduzida */
  const t = useCallback(
    (path) => {
      const value = path.split('.').reduce((acc, key) => (acc == null ? acc : acc[key]), translations[lang])
      return value ?? path
    },
    [lang],
  )

  /**
   * Campos de dados no formato { pt: '...', en: '...' }.
   * Se o valor nao for bilingue, devolve o proprio valor.
   */
  const tr = useCallback(
    (value) => {
      if (value && typeof value === 'object' && !Array.isArray(value)) {
        return value[lang] ?? value.pt ?? ''
      }
      return value
    },
    [lang],
  )

  const contextValue = useMemo(
    () => ({ lang, setLang, toggleLanguage, t, tr }),
    [lang, toggleLanguage, t, tr],
  )

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage precisa ser usado dentro de <LanguageProvider>')
  }
  return context
}
