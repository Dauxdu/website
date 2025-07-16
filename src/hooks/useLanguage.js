import { useState, useEffect } from "react"
import { LANGUAGES } from "../utils/constants"
import { detectBrowserLanguage } from "../utils/helpers"

/**
 * Хук для управления языковыми настройками
 * @returns {Object} - Объект с текущим языком и функцией переключения
 */
export const useLanguage = () => {
  const [language, setLanguage] = useState(LANGUAGES.EN)

  // Определение языка браузера
  useEffect(() => {
    const browserLang = detectBrowserLanguage()
    if (browserLang === LANGUAGES.RU) {
      setLanguage(LANGUAGES.RU)
    }
  }, [])

  const toggleLanguage = () => {
    setLanguage((current) =>
      current === LANGUAGES.EN ? LANGUAGES.RU : LANGUAGES.EN
    )
  }

  return {
    language,
    setLanguage,
    toggleLanguage,
    isRussian: language === LANGUAGES.RU,
    isEnglish: language === LANGUAGES.EN,
  }
}
