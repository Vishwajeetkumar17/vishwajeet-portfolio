"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Code, Briefcase, User, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { label: "Certifications", value: "5+" },
    { label: "Projects Completed", value: "5+" },
    { label: "Technologies", value: "10+" },
  ]

  // Fixed scroll functions
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center pt-16 pb-8 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-30 bg-gradient-to-r from-emerald-500 via-purple-500 to-pink-500 blur-3xl transform -skew-y-12 -z-10 animate-pulse"></div>
        <div
          className="absolute -inset-[10px] opacity-20 bg-gradient-to-l from-blue-500 via-emerald-500 to-yellow-500 blur-3xl transform skew-y-12 -z-10 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left lg:w-1/2"
          >
            <div className="mb-6">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-medium mb-4"
              >
                Full-Stack Developer
              </motion.span>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                  Vishwajeet Kumar
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6">
                Building digital experiences that make a difference
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0">
                Computer Science student with a passion for creating elegant solutions to complex problems. Specializing
                in full-stack development with expertise in Java and the MERN stack.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8">
              <Button
                className="bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white border-none"
                onClick={() => scrollToSection("contact")}
              >
                Get in Touch
              </Button>
              <Button
                variant="outline"
                className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-900/20 group"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
                <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="text-center p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-3xl font-bold text-emerald-600">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center lg:justify-start space-x-6">
              <motion.button
                onClick={() => scrollToSection("about")}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <User className="h-5 w-5 mr-2" />
                <span>About Me</span>
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("projects")}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Briefcase className="h-5 w-5 mr-2" />
                <span>Projects</span>
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("skills")}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Code className="h-5 w-5 mr-2" />
                <span>Skills</span>
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative lg:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 blur-xl opacity-30 animate-pulse"></div>
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-emerald-500/20">
                <Image
                  src="/images/profile.png"
                  alt="Vishwajeet Kumar"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full p-2">
                  <Code className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-0 right-0 flex justify-center"
        >
          <motion.button
            onClick={() => scrollToSection("about")}
            className="animate-bounce p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg hover:shadow-emerald-200/20 dark:hover:shadow-emerald-900/20 transition-all duration-300"
            aria-label="Scroll down"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowDown className="h-6 w-6 text-emerald-600" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
