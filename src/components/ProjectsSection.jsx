"use client"

import { useState, useEffect, useRef } from "react"

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("web")
  const [isInView, setIsInView] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const sectionRef = useRef(null)

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const projects = [
    {
      title: "Droptienda – Laravel CMS Platform",
      description: "A drag-and-drop CMS with full e-commerce functionality, built for entrepreneurs and dropshippers.",
      image: "/public/images/droptienda.png",
      category: "web",
      technologies: ["Laravel","PHP","jQuery", "Ajax", "Bootstrap","Rest Api"],
      featured: true,
      view_link: "https://www.dropmatix.com/droptienda",
      github: "#",
    },
    {
      title: "TextCRM – WhatsApp CRM",
      description:
        "A centralized WhatsApp chat solution for businesses with chatbot flows, auto-reply, and media sharing.",
      image: "/public/images/textcrm.png",
      category: "web",
      technologies: ["Laravel", "React.js", "Inertia.js", "Tailwind","Whatsapp Api","Graph Api"],
      featured: true,
      view_link: "https://textcrm.chat/",
      github: "#",
    },
    {
      title: "Personal Blog",
      description:
        "A personal blog built with Laravel and Vue.js to share my thoughts and experiences in web development.",
      image: "/public/images/personal_blog.png",
      category: "web",
      technologies: ["Laravel", "Vue.js", "Tailwind CSS"],
      featured: false,
      view_link: "#",
      github: "#",
    },
    {
      title: "Task Management App",
      description: "A simple task management application with drag-and-drop functionality and user authentication.",
      image: "/public/images/task_management.png",
      category: "web",
      technologies: ["React.js", "Firebase", "Material UI"],
      featured: false,
      view_link: "#",
      github: "#",
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current weather conditions and forecasts for multiple locations.",
      image: "/public/images/weather.png",
      category: "others",
      technologies: ["JavaScript", "OpenWeather API", "Chart.js"],
      featured: false,
      view_link: "#",
      github: "#",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase my projects and skills.",
      image: "/public/images/portfolio.png",
      category: "others",
      technologies: ["React.Js", "Tailwind CSS"],
      featured: true,
      view_link: "#",
      github: "https://github.com/ahsakib/portfolio-website",
    },
  ]

  // Handle category change with smooth transition
  const handleCategoryChange = (category) => {
    if (category === activeCategory) return

    setIsTransitioning(true)
    setTimeout(() => {
      setActiveCategory(category)
      setIsTransitioning(false)
    }, 300)
  }

  const filteredProjects = projects.filter((project) => project.category === activeCategory)

  return (
    <section id="portfolio" ref={sectionRef} className="py-16 md:py-20 bg-[#0a1120] relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse-slow animation-delay-2000"></div>
      <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl animate-pulse-slow animation-delay-1000"></div>

      {/* Animated geometric shapes - hidden on mobile */}
      <div className="absolute top-40 left-20 w-24 h-24 border border-green-500/10 transform rotate-12 animate-float animation-delay-500 hidden md:block"></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 border border-blue-500/10 rounded-lg transform -rotate-12 animate-float animation-delay-1500 hidden md:block"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h3 className="text-sm text-gray-400 mb-2 animate-slideUp">PORTFOLIO</h3>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 animate-slideUp animation-delay-500">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto animate-fadeIn animation-delay-1000 text-sm sm:text-base">
            Here are some of my recent projects. Each project represents a unique challenge and solution that I've
            worked on.
          </p>
        </div>

        {/* Scrollable category tabs on mobile */}
        <div className="flex flex-nowrap justify-start md:justify-center gap-2 md:gap-3 mb-8 md:mb-12 animate-fadeIn animation-delay-1000 overflow-x-auto pb-2 hide-scrollbar">
          <button
            className={`px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${
              activeCategory === "web"
                ? "bg-green-500 text-black shadow-glow"
                : "border border-green-500/30 text-gray-300 hover:bg-green-500/10"
            }`}
            onClick={() => handleCategoryChange("web")}
          >
            Web Projects
          </button>
          <button
            className={`px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${
              activeCategory === "others"
                ? "bg-green-500 text-black shadow-glow"
                : "border border-green-500/30 text-gray-300 hover:bg-green-500/10"
            }`}
            onClick={() => handleCategoryChange("others")}
          >
            Other Projects
          </button>
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
        >
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`bg-[#0f1a2b]/80 backdrop-blur-sm border border-green-500/10 rounded-xl overflow-hidden hover:border-green-500/30 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl group ${
                isInView ? "animate-fadeIn" : "opacity-0"
              } ${project.featured ? "ring-1 ring-green-500/20" : ""}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {project.featured && (
                  <div className="absolute top-3 right-3 bg-green-500 text-black text-xs font-bold px-2 py-1 rounded-full animate-pulse-slow">
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a2b] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project?.view_link}
                    target="_blank"
                    className="bg-green-500 text-black rounded-full p-2 mx-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-green-600 hover:scale-110"
                    title="View Project"
                  >
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
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-[#0f1a2b] text-green-500 border border-green-500 rounded-full p-2 mx-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100 hover:bg-green-500/10 hover:scale-110"
                    title="View Code"
                  >
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
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-white group-hover:text-green-500 transition-colors">
                  {project.title}
                </h3>
                <div className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-[#0a1120]/80 px-2 py-1 rounded-full text-xs border border-green-500/10 hover:border-green-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 text-xs md:text-sm mb-4 md:mb-6">{project.description}</p>
                <div className="flex gap-4">
                  <a
                    href={project?.github}
                    target="_blank"
                    className="text-gray-400 hover:text-green-500 transition-colors transform hover:scale-110"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
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
                  <a
                    href={project?.view_link}
                    target="_blank"
                    className="text-gray-400 hover:text-green-500 transition-colors transform hover:scale-110"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-green-500 text-green-500 hover:bg-green-500/10 px-5 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 transform hover:scale-105 group"
          >
            View All Projects
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
              className="group-hover:translate-x-1 transition-transform"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
