"use client"

import { useState } from "react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section id="contact" className="py-16 md:py-20 bg-[#0a1120]/50 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse-slow animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl animate-pulse-slow animation-delay-1000"></div>

      {/* Animated geometric shapes - hidden on mobile */}
      <div className="absolute top-20 right-40 w-20 h-20 border border-green-500/10 transform rotate-45 animate-float animation-delay-1000 hidden md:block"></div>
      <div className="absolute bottom-20 left-40 w-16 h-16 border border-blue-500/10 rounded-full animate-float animation-delay-1500 hidden md:block"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h3 className="text-sm text-gray-400 mb-2 animate-slideUp">CONTACT</h3>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 animate-slideUp animation-delay-500">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto animate-fadeIn animation-delay-1000 text-sm sm:text-base">
            I'm always open to new opportunities and collaborations. Feel free to reach out if you have a project in
            mind or just want to say hello!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          <div className="animate-fadeIn animation-delay-1000 order-2 md:order-1">
            <div className="card-glass p-6 md:p-8 rounded-xl border border-green-500/10 h-full">
              <h3 className="text-lg md:text-xl font-semibold mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
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
                    className="text-green-500"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </span>
                Contact Information
              </h3>
              <p className="text-gray-300 mb-8 text-sm sm:text-base">
                Feel free to reach out to me through any of the following methods. I'm always excited to connect with
                new people and discuss potential collaborations.
              </p>

              <div className="space-y-6 md:space-y-8">
                <div className="flex items-center gap-4 group hover-lift p-3 rounded-lg transition-all duration-300 hover:bg-green-500/5">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500/20 transition-all duration-300">
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
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs md:text-sm">Phone</p>
                    <a
                      href="tel:+8801824630876"
                      className="text-gray-200 hover:text-green-500 transition-colors text-sm md:text-base"
                    >
                      +8801824630876
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group hover-lift p-3 rounded-lg transition-all duration-300 hover:bg-green-500/5">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500/20 transition-all duration-300">
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
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs md:text-sm">Email</p>
                    <a
                      href="mailto:ahshakib572@gmail.com"
                      className="text-gray-200 hover:text-green-500 transition-colors text-sm md:text-base break-all"
                    >
                      ahshakib572@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group hover-lift p-3 rounded-lg transition-all duration-300 hover:bg-green-500/5">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500/20 transition-all duration-300">
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
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs md:text-sm">Address</p>
                    <p className="text-gray-200 text-sm md:text-base">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 md:mt-10">
                <h4 className="text-gray-300 mb-4 text-sm md:text-base">Find me on</h4>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#0a1120] border border-green-500/20 flex items-center justify-center text-gray-400 hover:text-green-500 hover:border-green-500/50 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                  >
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
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#0a1120] border border-green-500/20 flex items-center justify-center text-gray-400 hover:text-green-500 hover:border-green-500/50 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                  >
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
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#0a1120] border border-green-500/20 flex items-center justify-center text-gray-400 hover:text-green-500 hover:border-green-500/50 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                  >
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
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fadeIn animation-delay-1500 order-1 md:order-2">
            <div className="card-glass p-6 md:p-8 rounded-xl border border-green-500/10">
              <h3 className="text-lg md:text-xl font-semibold mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
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
                    className="text-green-500"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </span>
                Send Me a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      className="w-full bg-[#0f1a2b]/70 border border-green-500/10 focus:border-green-500 rounded-lg px-4 py-3 text-white transition-all duration-300 text-sm"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="w-full bg-[#0f1a2b]/70 border border-green-500/10 focus:border-green-500 rounded-lg px-4 py-3 text-white transition-all duration-300 text-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full bg-[#0f1a2b]/70 border border-green-500/10 focus:border-green-500 rounded-lg px-4 py-3 text-white transition-all duration-300 text-sm"
                    required
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    className="w-full bg-[#0f1a2b]/70 border border-green-500/10 focus:border-green-500 rounded-lg px-4 py-3 text-white transition-all duration-300 text-sm min-h-[120px] md:min-h-[150px]"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-black w-full px-5 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-glow text-sm md:text-base"
                >
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
                  >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
