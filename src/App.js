import React, { useState, useEffect } from "react"
import TechnologiesCarousel from "./components/TechnologiesCarousel"
import HeroSection from "./sections/HeroSection"
import ExperienceSection from "./sections/ExperienceSection"
import ProjectsSection from "./sections/ProjectsSection"
import FooterSection from "./sections/FooterSection"
import { portfolioContent } from "./data/content"
import { useLanguage, useScrollToSection } from "./hooks"
import "./App.css"

const App = () => {
  const { language, setLanguage } = useLanguage()
  const scrollToSection = useScrollToSection()
  const [isLoading, setIsLoading] = useState(true)
  const [sectionsLoaded, setSectionsLoaded] = useState({
    hero: false,
    experience: false,
    projects: false,
  })

  // Simulate progressive loading
  useEffect(() => {
    const loadSequence = async () => {
      // Hero loads first
      setTimeout(() => {
        setSectionsLoaded((prev) => ({ ...prev, hero: true }))
      }, 500)

      // Experience loads next
      setTimeout(() => {
        setSectionsLoaded((prev) => ({ ...prev, experience: true }))
      }, 1000)

      // Projects load last
      setTimeout(() => {
        setSectionsLoaded((prev) => ({ ...prev, projects: true }))
        setIsLoading(false)
      }, 1500)
    }

    loadSequence()
  }, [])

  const content = portfolioContent[language]

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 transition-all duration-700">
      {/* Hero Section */}
      <HeroSection
        content={content}
        sectionsLoaded={sectionsLoaded}
        scrollToSection={scrollToSection}
      />

      {/* Work Experience */}
      <ExperienceSection content={content} />

      {/* Technologies Carousel */}
      <TechnologiesCarousel language={language} />

      {/* Projects */}
      <ProjectsSection content={content} sectionsLoaded={sectionsLoaded} />

      {/* Footer */}
      <FooterSection
        content={content}
        language={language}
        setLanguage={setLanguage}
      />
    </div>
  )
}

export default App
