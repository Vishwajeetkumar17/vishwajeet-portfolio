"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export default function Certificates() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const educationData = [
    {
      topic: "Data Structures And Algorithms",
      intitution: "Cipher Schools",
      period: "Jan’25 - Feb’25",
      detail: "Learned core data structures and algorithms including arrays, linked lists, trees, sorting, and searching with hands-on problem-solving practice."
    },
    {
        topic: " Frontend Web Development with React",
        intitution: "Gokboru Tech.",
        period: " Jun’24 - Jul’24",
        detail: "Built responsive web interfaces using React, JavaScript, and CSS; focused on components, state management, and API integration.",
    },
    {
        topic: "Cloud Computing",
        intitution: "NPTEL",
        period: "Aug’24 - Nov’24",
        detail: "Studied cloud models, virtualization, deployment strategies, and services like IaaS, PaaS, SaaS; gained hands-on experience with cloud platforms.",
    },
    {
        topic: "Azure AI Fundamentals",
        intitution: "Microsoft",
        period:"Mar’23",
        detail: "Explored core AI concepts and Microsoft Azure services including machine learning, computer vision, and natural language processing fundamentals.",
    },
  ]

  return (
    <section id="certificates" className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
              Certifications
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-500 mx-auto mb-6"></div>
        </motion.div>

        <div className="space-y-6">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ x: 5 }}
            >
              <Card className="overflow-hidden border-l-4 border-emerald-600 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-200/20 dark:hover:shadow-emerald-900/20">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div className="flex items-center mb-2 md:mb-0">
                      <motion.div
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <GraduationCap className="h-6 w-6 text-emerald-600 mr-2" />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.topic}</h3>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Calendar className="h-5 w-5 mr-2" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                  <div className="ml-8">
                    <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">{item.intitution}</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-1">{item.detail}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
