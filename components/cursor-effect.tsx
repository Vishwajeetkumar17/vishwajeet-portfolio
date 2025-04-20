"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function CursorEffect() {
  const [isVisible, setIsVisible] = useState(false)
  const cursorX = useMotionValue(1000)
  const cursorY = useMotionValue(1000)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
    }

    window.addEventListener("mousemove", moveCursor)
    setIsVisible(true)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }
  }, [cursorX, cursorY])

  // Hide on mobile devices
  if (typeof window !== "undefined" && window.innerWidth < 768) {
    return null
  }

  return (
    <>
      <motion.div
        className="cursor-dot fixed top-0 left-0 z-50 pointer-events-none hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div className="relative">
          <div className="absolute w-8 h-8 rounded-full border-2 border-emerald-500 opacity-50"></div>
          <div className="absolute w-2 h-2 rounded-full bg-emerald-500 top-3 left-3"></div>
        </div>
      </motion.div>
    </>
  )
}
