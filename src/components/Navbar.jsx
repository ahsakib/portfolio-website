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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && 
          !event.target.closest(".mobile-menu-container") && 
          !event.target.closest(".burger-menu")) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMenuOpen])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto"
    return () => { document.body.style.overflow = "auto" }
  }, [isMenuOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3${
        isMenuOpen
          ? "bg-transparent py-5"
          : scrolled
          ? "bg-[#0a1120]/90 backdrop-blur-md shadow-lg py-3"
          : ""
      }`}
      
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#heroSection" className="flex items-center group z-20">
          <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-black font-bold transition-all duration-300 group-hover:shadow-glow">
            A
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
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
              href="#"
              onClick={(e) => {
                e.preventDefault(); 
                window.open("/pdf/shakib_cv.pdf", "_blank"); 
              }}
            
            className="bg-green-500 hover:bg-green-600 text-black px-5 py-2 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-glow"
          >
            RESUME
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 focus:outline-none z-20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`burger-menu ${isMenuOpen ? "open" : ""}`}>
            <span className="burger-bar"></span>
            <span className="burger-bar"></span>
            <span className="burger-bar"></span>
          </div>
        </button>
      </div>

      {/* Enhanced Mobile Navigation with better animation */}
      <div
        className={`fixed inset-0 bg-[#0a1120]/95 backdrop-blur-lg md:hidden transition-all duration-500 ease-in-out z-10 mobile-menu-container
          ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
      >
        <div className="flex flex-col justify-center items-center h-full space-y-8 p-4">
          <a
            href="#about"
            className="text-2xl text-gray-300 hover:text-green-500 transition-all duration-300 transform hover:scale-110"
            onClick={() => setIsMenuOpen(false)}
          >
            ABOUT
          </a>
          <a
            href="#skills"
            className="text-2xl text-gray-300 hover:text-green-500 transition-all duration-300 transform hover:scale-110"
            onClick={() => setIsMenuOpen(false)}
          >
            SKILL
          </a>
          <a
            href="#portfolio"
            className="text-2xl text-gray-300 hover:text-green-500 transition-all duration-300 transform hover:scale-110"
            onClick={() => setIsMenuOpen(false)}
          >
            PORTFOLIO
          </a>
          <a
            href="#contact"
            className="text-2xl text-gray-300 hover:text-green-500 transition-all duration-300 transform hover:scale-110"
            onClick={() => setIsMenuOpen(false)}
          >
            CONTACT
          </a>
          <a
            href="#blog"
            className="text-2xl text-gray-300 hover:text-green-500 transition-all duration-300 transform hover:scale-110"
            onClick={() => setIsMenuOpen(false)}
          >
            BLOG
          </a>
          <a
            href="#"
            onClick={(e) => {
                () => setIsMenuOpen(false)
              e.preventDefault(); 
              window.open("/pdf/shakib_cv.pdf", "_blank"); 
            }}
            className="bg-green-500 hover:bg-green-600 text-black px-8 py-3 rounded-md transition-all duration-300 text-center mt-4 transform hover:scale-105"
          >
            RESUME
          </a>

          {/* Social links for mobile */}
          <div className="flex space-x-6 mt-8">
            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors transform hover:scale-125">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors transform hover:scale-125">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors transform hover:scale-125">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
