import { useCallback } from "react"
import { scrollToSection as scrollToSectionHelper } from "../utils/helpers"

/**
 * Хук для скролла к секциям страницы
 * @returns {Function} - Функция для скролла к секции по ID
 */
export const useScrollToSection = () => {
  const scrollToSection = useCallback((sectionId) => {
    scrollToSectionHelper(sectionId)
  }, [])

  return scrollToSection
}
