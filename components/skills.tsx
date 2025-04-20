"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Terminal, Globe, Layers, Languages, Briefcase } from "lucide-react"
import { TechIcon } from "@/components/tech-icon"
import {
  SiC,
  SiPython,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiSpringboot,
  SiExpress,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiLinux,
  SiCplusplus,
  SiKotlin,
} from "react-icons/si"
import { DiJava } from "react-icons/di"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6 text-emerald-600" />,
      skills: [
        { name: "C", icon: <SiC className="h-6 w-6 text-emerald-600" /> },
        { name: "Python", icon: <SiPython className="h-6 w-6 text-emerald-600" /> },
        { name: "Java", icon: <DiJava className="h-6 w-6 text-emerald-600" /> },
        { name: "C++", icon: <SiCplusplus className="h-6 w-6 text-emerald-600" /> },
        { name: "Kotlin", icon: <SiKotlin className="h-6 w-6 text-emerald-600" /> },
      ],
    },
    {
      title: "Frameworks",
      icon: <Globe className="h-6 w-6 text-emerald-600" />,
      skills: [
        { name: "HTML5", icon: <SiHtml5 className="h-6 w-6 text-emerald-600" /> },
        { name: "CSS3", icon: <SiCss3 className="h-6 w-6 text-emerald-600" /> },
        { name: "JavaScript", icon: <SiJavascript className="h-6 w-6 text-emerald-600" /> },
        { name: "Node.js", icon: <SiNodedotjs className="h-6 w-6 text-emerald-600" /> },
        { name: "Express.js", icon: <SiExpress className="h-6 w-6 text-emerald-600" /> },
        { name: "React js", icon: <SiReact className="h-6 w-6 text-emerald-600" /> }
      ],
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6 text-emerald-600" />,
      skills: [
        { name: "MySQL", icon: <SiMysql className="h-6 w-6 text-emerald-600" /> },
        { name: "MongoDB", icon: <SiMongodb className="h-6 w-6 text-emerald-600" /> },
      ],
    },
    {
      title: "Tools",
      icon: <Terminal className="h-6 w-6 text-emerald-600" />,
      skills: [
        { name: "Git", icon: <SiGit className="h-6 w-6 text-emerald-600" /> },
        { name: "GitHub", icon: <SiGithub className="h-6 w-6 text-emerald-600" /> },
        { name: "MS Office", icon: <span className="text-2xl text-emerald-600">📄</span> },      ],
    },
    {
      title: "Soft Skills",
      icon: <Briefcase className="h-6 w-6 text-emerald-600" />,
      skills: [
        { name: "Time Management", icon: <span className="text-2xl text-emerald-600">⏱️</span> },
        { name: "Teamwork", icon: <span className="text-2xl text-emerald-600">👥</span> },
        { name: "Problem-Solving", icon: <span className="text-2xl text-emerald-600">🧩</span> }
      ],
    },
    {
      title: "Languages",
      icon: <Languages className="h-6 w-6 text-emerald-600" />,
      skills: [
        { name: "English", icon: <span className="text-2xl text-emerald-600">EN</span> },
        { name: "Hindi", icon: <span className="text-2xl text-emerald-600">HI</span> },
      ],
    },
  ]

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-500 mx-auto mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:shadow-emerald-200/20 dark:hover:shadow-emerald-900/20 border-2 border-transparent hover:border-emerald-500/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <motion.div whileHover={{ rotate: 15 }} transition={{ type: "spring", stiffness: 300 }}>
                      {category.icon}
                    </motion.div>
                    <h3 className="text-lg font-semibold ml-2 text-gray-900 dark:text-white">{category.title}</h3>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {category.skills.map((skill, i) => (
                      <TechIcon key={i} name={skill.name} icon={skill.icon} />
                    ))}
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
