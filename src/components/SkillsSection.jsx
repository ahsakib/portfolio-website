"use client"

import { useState, useEffect, useRef } from "react"

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("web")
  const [visibleSkills, setVisibleSkills] = useState([])
  const sectionRef = useRef(null)
  const [isInView, setIsInView] = useState(false)

  const skills = [
    { name: "JavaScript", percentage: 85, category: "web" },
    { name: "React.js", percentage: 90, category: "web" },
    { name: "Next.js", percentage: 75, category: "web" },
    { name: "jQuery", percentage: 80, category: "web" },
    { name: "Tailwind CSS", percentage: 90, category: "web" },
    { name: "Bootstrap", percentage: 85, category: "web" },
    { name: "PHP", percentage: 88, category: "programming" },
    { name: "Laravel", percentage: 92, category: "programming" },
    { name: "MySQL", percentage: 80, category: "programming" },
    { name: "RESTful API", percentage: 85, category: "programming" },
    { name: "Git", percentage: 78, category: "tools" },
    { name: "VS Code", percentage: 90, category: "tools" },
    { name: "Figma", percentage: 70, category: "tools" },
    { name: "Postman", percentage: 85, category: "tools" },
    { name: "English", percentage: 80, category: "others" },
    { name: "Teamwork", percentage: 95, category: "others" },
    { name: "Problem Solving", percentage: 88, category: "others" },
    { name: "Communication", percentage: 85, category: "others" },
  ]

  const filteredSkills = skills.filter((skill) => skill.category === activeCategory)

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

  // Add skills one by one when section is in view
  useEffect(() => {
    if (isInView) {
      const timer = setInterval(() => {
        const newVisibleSkills = [...visibleSkills]
        if (newVisibleSkills.length < filteredSkills.length) {
          newVisibleSkills.push(filteredSkills[newVisibleSkills.length].name)
          setVisibleSkills(newVisibleSkills)
        } else {
          clearInterval(timer)
        }
      }, 200) // Faster animation

      return () => clearInterval(timer)
    }
  }, [isInView, visibleSkills, filteredSkills])

  // Reset visible skills when category changes
  useEffect(() => {
    setVisibleSkills([])
  }, [activeCategory])

  return (
    <section id="skills" ref={sectionRef} className="py-16 md:py-20 bg-[#0a1120]/50 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse-slow animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/3 rounded-full filter blur-3xl animate-pulse-slow animation-delay-1000"></div>

      {/* Animated geometric shapes - hidden on mobile */}
      <div className="absolute top-20 right-20 w-20 h-20 border border-green-500/10 rounded-md transform rotate-45 animate-float animation-delay-1000 hidden md:block"></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 border border-blue-500/10 rounded-full animate-float animation-delay-1500 hidden md:block"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h3 className="text-sm text-gray-400 mb-2 animate-slideUp">SKILLS</h3>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 animate-slideUp animation-delay-500">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto animate-fadeIn animation-delay-1000 text-sm sm:text-base">
            I've developed a diverse set of skills throughout my journey as a developer. Here's a breakdown of my
            technical expertise and proficiency levels.
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
            onClick={() => setActiveCategory("web")}
          >
            Web Development
          </button>
          <button
            className={`px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${
              activeCategory === "programming"
                ? "bg-green-500 text-black shadow-glow"
                : "border border-green-500/30 text-gray-300 hover:bg-green-500/10"
            }`}
            onClick={() => setActiveCategory("programming")}
          >
            Programming
          </button>
          <button
            className={`px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${
              activeCategory === "tools"
                ? "bg-green-500 text-black shadow-glow"
                : "border border-green-500/30 text-gray-300 hover:bg-green-500/10"
            }`}
            onClick={() => setActiveCategory("tools")}
          >
            Tools
          </button>
          <button
            className={`px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${
              activeCategory === "others"
                ? "bg-green-500 text-black shadow-glow"
                : "border border-green-500/30 text-gray-300 hover:bg-green-500/10"
            }`}
            onClick={() => setActiveCategory("others")}
          >
            Soft Skills
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className={`space-y-2 transition-all duration-500 card-glass p-3 md:p-4 rounded-lg hover:shadow-glow ${
                visibleSkills.includes(skill.name)
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-10"
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="text-gray-300 flex items-center text-sm">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  {skill.name}
                </span>
                <span className="text-green-500 text-xs md:text-sm font-medium">{skill.percentage}%</span>
              </div>
              <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm">
                <div
                  className="h-full bg-gradient-to-r from-green-600 to-green-400 rounded-full transition-all duration-1000 ease-out relative"
                  style={{
                    width: visibleSkills.includes(skill.name) ? `${skill.percentage}%` : "0%",
                  }}
                >
                  {/* Enhanced animated glow effect */}
                  <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/20 blur-sm animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
