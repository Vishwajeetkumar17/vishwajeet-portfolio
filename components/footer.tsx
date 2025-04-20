"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">V</span>
              ishwajeet Kumar
            </h3>
            <p className="text-gray-400 mt-1">Full-Stack Developer</p>
          </div>

          <div className="flex space-x-4 mb-4 md:mb-0">
            <motion.a
              target="_blank"
              href="https://github.com/Vishwajeetkumar17"
              className="text-gray-400 hover:text-emerald-500 transition-colors"
              aria-label="GitHub"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a
              target="_blank"
              href="https://www.linkedin.com/in/vishwajeet-kumar-vk17/"
              className="text-gray-400 hover:text-emerald-500 transition-colors"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a
              target="_blank"
              href="mailto:vishwajitjee17@gmail.com"
              className="text-gray-400 hover:text-emerald-500 transition-colors"
              aria-label="Email"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="h-5 w-5" />
            </motion.a>
          </div>

          <div className="text-gray-400 text-sm">© {currentYear} Vishwajeet Kumar. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
