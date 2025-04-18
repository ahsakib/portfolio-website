"use client"

import { useState, useEffect } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a1120]/90 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center group">
          <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-black font-bold transition-all duration-300 group-hover:shadow-glow">
            A
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-300 hover:text-green-500 transition-all duration-300 relative nav-link">
            ABOUT
          </a>
          <a
            href="#skills"
            className="text-gray-300 hover:text-green-500 transition-all duration-300 relative nav-link"
          >
            SKILL
          </a>
          <a
            href="#portfolio"
            className="text-gray-300 hover:text-green-500 transition-all duration-300 relative nav-link"
          >
            PORTFOLIO
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-green-500 transition-all duration-300 relative nav-link"
          >
            CONTACT
          </a>
          <a href="#blog" className="text-gray-300 hover:text-green-500 transition-all duration-300 relative nav-link">
            BLOG
          </a>
          <a
            href="#resume"
            className="bg-green-500 hover:bg-green-600 text-black px-5 py-2 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-glow"
          >
            RESUME
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white p-2 focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className={`burger-menu ${isMenuOpen ? "open" : ""}`}>
            <span className="burger-bar"></span>
            <span className="burger-bar"></span>
            <span className="burger-bar"></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 py-4 bg-[#0a1120]/95 backdrop-blur-md border-t border-green-500/10 flex flex-col space-y-4">
          <a
            href="#about"
            className="text-gray-300 hover:text-green-500 transition-all duration-300 py-2 pl-2 border-l-2 border-transparent hover:border-green-500"
            onClick={() => setIsMenuOpen(false)}
          >
            ABOUT
          </a>
          <a
            href="#skills"
            className="text-gray-300 hover:text-green-500 transition-all duration-300 py-2 pl-2 border-l-2 border-transparent hover:border-green-500"
            onClick={() => setIsMenuOpen(false)}
          >
            SKILL
          </a>
          <a
            href="#portfolio"
            className="text-gray-300 hover:text-green-500 transition-all duration-300 py-2 pl-2 border-l-2 border-transparent hover:border-green-500"
            onClick={() => setIsMenuOpen(false)}
          >
            PORTFOLIO
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-green-500 transition-all duration-300 py-2 pl-2 border-l-2 border-transparent hover:border-green-500"
            onClick={() => setIsMenuOpen(false)}
          >
            CONTACT
          </a>
          <a
            href="#blog"
            className="text-gray-300 hover:text-green-500 transition-all duration-300 py-2 pl-2 border-l-2 border-transparent hover:border-green-500"
            onClick={() => setIsMenuOpen(false)}
          >
            BLOG
          </a>
          <a
            href="#resume"
            className="bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded-md transition-all duration-300 text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            RESUME
          </a>
        </div>
      </div>
    </nav>
  )
}
