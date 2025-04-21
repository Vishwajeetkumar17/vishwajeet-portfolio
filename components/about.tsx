"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { User, Mail, MapPin, Phone, Github, Linkedin } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-500 mx-auto mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2"
            whileHover={{ y: -5 }}
          >
            <Card className="h-full transition-all duration-300 hover:shadow-lg hover:shadow-emerald-200/20 dark:hover:shadow-emerald-900/20 border-2 border-transparent hover:border-emerald-500/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Personal Profile</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Currently pursuing a Bachelor's degree in Computer Science at Lovely Professional University, with
                 hands-on experience in Full-Stack Development. My expertise includes front-end web
                  development, algorithm design, and back-end web development.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Proficient in Java and the MERN stack, I am seeking full-stack development roles where I can leverage
                  my technical skills and contribute to impactful projects.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -5 }}
          >
            <Card className="h-full transition-all duration-300 hover:shadow-lg hover:shadow-emerald-200/20 dark:hover:shadow-emerald-900/20 border-2 border-transparent hover:border-emerald-500/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Contact Information</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700 dark:text-gray-300 group">
                    <User className="h-5 w-5 mr-3 text-emerald-600 transition-transform duration-300 group-hover:scale-110" />
                    <span className="group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                      Vishwajeet Kumar
                    </span>
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300 group">
                    <MapPin className="h-5 w-5 mr-3 text-emerald-600 transition-transform duration-300 group-hover:scale-110" />
                    <span className="group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                      Dumraon, Buxar, Bihar
                    </span>
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300 group">
                    <Phone className="h-5 w-5 mr-3 text-emerald-600 transition-transform duration-300 group-hover:scale-110" />
                    <span className="group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                      7763913828
                    </span>
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300 group">
                    <Mail className="h-5 w-5 mr-3 text-emerald-600 transition-transform duration-300 group-hover:scale-110" />
                    <motion.a
                      target="_blank"
                      href="mailto:vishwajitjee17@gmail.com"
                      className="text-gray-300 hover:text-emerald-500 transition-colors"
                      aria-label="Email"
                      whileHover={{ scale: 1, rotate: 2 }}
                      whileTap={{ scale: 0.9 }}
                      >
                      <span className="group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    vishwajitjee17@gmail.com
                    </span>
                    </motion.a>
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300 group">
                    <Github className="h-5 w-5 mr-3 text-emerald-600 transition-transform duration-300 group-hover:scale-110" />
                    <motion.a
                      target="_blank"
                      href="https://github.com/Vishwajeetkumar17"
                      className="text-gray-300 hover:text-emerald-500 transition-colors"
                      aria-label="Github"
                      whileHover={{ scale: 1, rotate: 2 }}
                      whileTap={{ scale: 0.9 }}
                      >
                      <span className="group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      Vishwajeetkumar17
                    </span>
                    </motion.a>
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300 group">
                    <Linkedin className="h-5 w-5 mr-3 text-emerald-600 transition-transform duration-300 group-hover:scale-110" />
                    <motion.a
                      target="_blank"
                      href="https://www.linkedin.com/in/vishwajeet-kumar-vk17/"
                      className="text-gray-300 hover:text-emerald-500 transition-colors"
                      aria-label="LinkedIn"
                      whileHover={{ scale: 1, rotate: 2 }}
                      whileTap={{ scale: 0.9 }}
                      >
                      <span className="group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      vishwajeet-kumar-vk17
                    </span>
                    </motion.a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
