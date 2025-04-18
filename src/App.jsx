"use client"

import { useEffect } from "react"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import SkillsSection from "./components/SkillsSection"
import ProjectsSection from "./components/ProjectsSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"

function App() {
  // Add smooth scrolling behavior
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()

        const targetId = this.getAttribute("href")
        if (targetId === "#") return

        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" })
        }
      })
    })
  }, [])

  return (
    <div className="min-h-screen bg-[#0a1120] text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
