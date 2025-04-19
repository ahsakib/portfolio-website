"use client"

import { useState, useEffect } from "react"

export default function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)
  const [particles, setParticles] = useState([])
  const [isMobile, setIsMobile] = useState(false)

  const skills = [
    "Laravel Developer",
    "PHP Developer",
    "React.js Developer",
    "JavaScript Developer",
    "Full Stack Developer",
    "RESTful API Developer",
    "Whatsapp Business Api",
  ]

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Generate random particles - fewer on mobile
  useEffect(() => {
    const generateParticles = () => {
      const particleCount = isMobile ? 20 : 50
      const newParticles = []
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 5 + 2,
          color:
            i % 4 === 0
              ? "rgba(16, 185, 129, 0.2)"
              : i % 4 === 1
                ? "rgba(59, 130, 246, 0.2)"
                : i % 4 === 2
                  ? "rgba(139, 92, 246, 0.15)"
                  : "rgba(255, 255, 255, 0.1)",
          duration: Math.random() * 20 + 10,
          delay: Math.random() * 5,
        })
      }
      setParticles(newParticles)
    }

    generateParticles()
  }, [isMobile])

  useEffect(() => {
    const skill = skills[currentSkillIndex]

    const handleTyping = () => {
      if (isDeleting) {
        // Deleting text
        setTypedText(skill.substring(0, typedText.length - 1))
        setTypingSpeed(50) // Faster when deleting
      } else {
        // Typing text
        setTypedText(skill.substring(0, typedText.length + 1))
        setTypingSpeed(150) // Normal typing speed
      }

      // If completed typing the current skill
      if (!isDeleting && typedText === skill) {
        // Pause at the end of typing
        setTimeout(() => setIsDeleting(true), 1500)
      }
      // If deleted the current skill
      else if (isDeleting && typedText === "") {
        setIsDeleting(false)
        // Move to the next skill
        setCurrentSkillIndex((currentSkillIndex + 1) % skills.length)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [typedText, currentSkillIndex, isDeleting, typingSpeed, skills])

  return (
    <section id="heroSection" className="pt-24 md:pt-32 pb-16 md:pb-20 min-h-screen flex items-center relative overflow-hidden">
      {/* Enhanced animated background with 3D perspective */}
      <div className="absolute top-0 right-0 bottom-0 w-full h-full z-0 perspective-1000">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-green-500/10 via-transparent to-transparent animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-radial from-blue-500/5 via-transparent to-transparent animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl animate-pulse-slow animation-delay-1000"></div>
      </div>

      {/* Enhanced floating particles with more variety */}
      <div className="particles-container absolute inset-0 z-0 perspective-1000">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle absolute rounded-full"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              top: `${particle.y}%`,
              left: `${particle.x}%`,
              backgroundColor: particle.color,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
              transform: `translateZ(${Math.random() * 50}px)`,
            }}
          ></div>
        ))}
      </div>

      {/* Animated geometric shapes with 3D transforms - hidden on mobile */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-green-500/20 rounded-lg transform rotate-45 animate-float animation-delay-1000 hover:rotate-90 transition-transform duration-1000 hidden md:block"></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-blue-500/20 rounded-full animate-float animation-delay-1500 hover:scale-150 transition-transform duration-1000 hidden md:block"></div>
      <div className="absolute top-2/3 left-1/3 w-16 h-16 border border-purple-500/20 transform rotate-12 animate-float animation-delay-500 hover:rotate-180 transition-transform duration-1000 hidden md:block"></div>

      {/* Enhanced 3D cube animation - hidden on mobile */}
      <div className="absolute bottom-1/3 right-1/3 perspective-1000 hidden lg:block">
        <div className="cube">
          <div className="cube-face cube-face-front"></div>
          <div className="cube-face cube-face-back"></div>
          <div className="cube-face cube-face-right"></div>
          <div className="cube-face cube-face-left"></div>
          <div className="cube-face cube-face-top"></div>
          <div className="cube-face cube-face-bottom"></div>
        </div>
      </div>

      {/* Social Links Sidebar - Hidden on mobile */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 flex flex-col items-center z-10 hidden md:flex">
        <div className="w-10 h-64 bg-[#0a1120]/80 backdrop-blur-sm border-r border-green-500/20 flex flex-col items-center justify-center gap-6 social-sidebar">
          <a href="https://github.com/ahsakib" target="_blank" aria-label="GitHub" className="social-icon" rel="noreferrer"

          >
            <div className="text-gray-400 hover:text-green-500 transition-all duration-300 transform hover:scale-125 hover:rotate-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/anowar-shakib" target="_blank" aria-label="LinkedIn" className="social-icon" rel="noreferrer">
            <div className="text-gray-400 hover:text-green-500 transition-all duration-300 transform hover:scale-125 hover:rotate-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
            </div>
          </a>
          <a href="#" target="_blank" aria-label="Twitter" className="social-icon" rel="noreferrer">
            <div className="text-gray-400 hover:text-green-500 transition-all duration-300 transform hover:scale-125 hover:rotate-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </div>
          </a>
          <a href="mailto:ahshakib572@gmail.com" aria-label="Email" className="social-icon">
            <div className="text-gray-400 hover:text-green-500 transition-all duration-300 transform hover:scale-125 hover:rotate-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
          </a>
        </div>
        <div className="h-32 w-10 bg-[#0a1120]/80 backdrop-blur-sm border-r border-green-500/20 flex flex-col items-center justify-center">
          <div className="rotate-90 text-xs tracking-widest text-gray-400">FOLLOW</div>
        </div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-2xl mx-auto md:mx-0">
          <p className="text-green-500 mb-2 animate-fadeIn">Hello! I am</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-slideUp">
            <span className="text-gradient">Anowar Shakib</span>
          </h1>
          <div className="flex flex-wrap items-center mb-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 mr-2">Professional</h2>
            <span className="text-xl sm:text-2xl md:text-3xl text-green-500 typing-cursor">{typedText}</span>
          </div>
          <p className="text-gray-400 mb-6 md:mb-8 animate-fadeIn animation-delay-500">Laravel & React</p>
          <div className="flex flex-wrap gap-4 animate-fadeIn animation-delay-1000">
            <a
              href="/public/pdf/shakib_cv.pdf"
              download="anowar-shakib.pdf"
              className="bg-green-500 hover:bg-green-600 text-black px-5 sm:px-6 py-2 sm:py-3 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-glow flex items-center gap-2 group">
              Get Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-y-1 transition-transform"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
            <a
              href="#about"
              className="border border-green-500 text-green-500 hover:bg-green-500/10 px-5 sm:px-6 py-2 sm:py-3 rounded-md transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group">
              About Me
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:rotate-90 transition-transform"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </a>
          </div>

          {/* Social links for mobile only */}
          <div className="flex mt-8 space-x-5 md:hidden">
            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors transform hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors transform hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors transform hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors transform hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>

          {/* Enhanced scroll indicator with animation */}
          <div
            className="scroll-indicator absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce animation-delay-2000 cursor-pointer hover:scale-110 transition-transform"
            onClick={() => {
              const aboutSection = document.getElementById("about")
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
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
              className="text-green-500"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
