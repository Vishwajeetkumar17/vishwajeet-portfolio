"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Heart, Github, ExternalLink, ShoppingBagIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TechIcon } from "@/components/tech-icon"
import {
  SiSpringboot,
  SiReact,
  SiBootstrap,
  SiJavascript,
  SiMysql,
  SiPython,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiEjs,
} from "react-icons/si"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const projects = [
    {
      title: "Electronics Shop",
      description: [
        "Developed an electronic platform where in users can buy numerous products such as Headphones, speaker, earbuds and more.",
        "It offers dynamic data from MongoDB, responsive design, retrieval, deletion of data, user authentication, individual user data storage, and for other advanced tasks.",
        "With intuitive design and smooth experience.",
      ],
      technologies: [
        { name: "React", icon: <SiReact className="h-6 w-6 text-emerald-600" /> },
        { name: "Express", icon: <SiExpress className="h-6 w-6 text-emerald-600" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="h-6 w-6 text-emerald-600" /> },
        { name: "JavaScript", icon: <SiJavascript className="h-6 w-6 text-emerald-600" /> },
        { name: "MongoDB", icon: <SiMongodb className="h-6 w-6 text-emerald-600" /> },
      ],
      icon: <ShoppingBagIcon className="h-10 w-10 text-emerald-600" />,
      image: "/images/shop.png",
      code: "https://github.com/Vishwajeetkumar17/Tarang-Electronics",
      demo: ""
    },
    {
      title: "Notes App",
      description: [
        "A user-friendly short-notes website designed to help users quickly jot down, organize, and manage their important tasks efficiently.",
        "It offers responsive design, basics of react for dynamic changes.",
      ],
      technologies: [
        { name: "React", icon: <SiReact className="h-6 w-6 text-emerald-600" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="h-6 w-6 text-emerald-600" /> },
        { name: "JavaScript", icon: <SiJavascript className="h-6 w-6 text-emerald-600" /> },
      ],
      icon: <MessageSquare className="h-10 w-10 text-emerald-600" />,
      image: "/images/notes.png",
      code: "https://github.com/Vishwajeetkumar17/SaveYourData",
      demo: "https://save-your-data.vercel.app/"
    },
    {
      title: "Restaurant Website",
      description: [
        "Responsive Frontend with React & Bootstrap: Developed a dynamic and responsive restaurant website using React for seamless component-based architecture and Bootstrap for consistent styling across devices.",
        "Interactive UI for Menu & Booking: Implemented interactive features such as a live menu display and reservation form, leveraging React state management and Bootstrap components for an intuitive user experience.",
      ],
      technologies: [
        { name: "React", icon: <SiReact className="h-6 w-6 text-emerald-600" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="h-6 w-6 text-emerald-600" /> },
        { name: "JavaScript", icon: <SiJavascript className="h-6 w-6 text-emerald-600" /> },
      ],
      icon: <Heart className="h-10 w-10 text-emerald-600" />,
      image: "/images/rest.png",
      code: "https://github.com/Vishwajeetkumar17/restaurant-website",
      demo: "https://restaurant-website-pi-flax.vercel.app/"
    },
    {
      title: "Short Url Generator",
      description: [
        "Built a Short URL Generator web app featuring user authentication and individual profiles to manage personalized sets of shortened URLs.",
        "Implemented ShortID for unique link generation, and dynamic UI rendering with EJS for a smooth user experience.A user-friendly short-notes website designed to help users quickly jot down, organize, and manage their important tasks efficiently.",
      ],
      technologies: [
        { name: "Ejs", icon: <SiEjs className="h-6 w-6 text-emerald-600" /> },
        { name: "Express", icon: <SiExpress className="h-6 w-6 text-emerald-600" /> },
        { name: "MongoDB", icon: <SiMongodb className="h-6 w-6 text-emerald-600" /> },
      ],
      icon: <Heart className="h-10 w-10 text-emerald-600" />,
      image: "/images/hom.png",
      code: "https://github.com/Vishwajeetkumar17/short-url",
      demo: ""
    },
  ]

  return (
    <section id="projects" className="py-16 scroll-mt-24">
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-500 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on during my academic journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:shadow-emerald-200/20 dark:group-hover:shadow-emerald-900/20 border-2 border-transparent group-hover:border-emerald-500/20">
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} dashboard`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-1 bg-white/20 backdrop-blur-sm text-white border-white/20 hover:bg-white/30 hover:text-white"
                        >
                          <Github className="h-4 w-4" />
                          <motion.a
                          href={project.code}
                          target="_blank"
                          ><span>Code</span></motion.a>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-1 bg-white/20 backdrop-blur-sm text-white border-white/20 hover:bg-white/30 hover:text-white"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <motion.a
                          href={project.demo}
                          target="_blank"
                          ><span>Demo</span></motion.a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <motion.div whileHover={{ rotate: 15 }} transition={{ type: "spring", stiffness: 300 }}>
                    {project.icon}
                  </motion.div>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {project.description.map((desc, i) => (
                      <p key={i} className="text-gray-700 dark:text-gray-300">
                        {desc}
                      </p>
                    ))}
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Technologies Used:</h4>
                    <div className="flex flex-wrap justify-center gap-3">
                      {project.technologies.map((tech, i) => (
                        <TechIcon key={i} name={tech.name} icon={tech.icon} />
                      ))}
                    </div>
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
