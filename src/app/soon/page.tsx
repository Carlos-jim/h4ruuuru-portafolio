"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ComingSoonPage() {

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Set launch date to 30 days from now
  useEffect(() => {
    const launchDate = new Date()
    launchDate.setDate(launchDate.getDate() + 30)

    const interval = setInterval(() => {
      const now = new Date()
      const difference = launchDate.getTime() - now.getTime()

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setCountdown({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white p-4">
      <div className="absolute inset-0 z-0">
        <Grid />
      </div>

      <motion.div
        className="absolute z-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 blur-3xl"
        initial={{ scale: 0.8, opacity: 0.1 }}
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ width: "60vw", height: "60vw", maxWidth: "800px", maxHeight: "800px" }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-block relative">
            <div className="h-16 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 blur-md opacity-70" />
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Proximamente más proyectos...
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
         Se esta trabajando en el sitio web, pero no te preocupes, ¡ya casi está listo! <br /> <br />
        </motion.p>

        <motion.div
          className="grid grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <CountdownItem value={countdown.days} label="Days" />
          <CountdownItem value={countdown.hours} label="Hours" />
          <CountdownItem value={countdown.minutes} label="Minutes" />
          <CountdownItem value={countdown.seconds} label="Seconds" />
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <SocialLink link="https://github.com/Carlos-jim" icon={<Github className="h-5 w-5" />} />
          <SocialLink link="https://www.linkedin.com/in/carlos-jim%C3%A9nez-garc%C3%ADa/" icon={<Linkedin className="h-5 w-5" />} />
        </motion.div>
      </div>
    </div>
  )
}

function CountdownItem({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="h-16 w-16 md:h-20 md:w-20 flex items-center justify-center rounded-lg bg-gray-900/50 border border-gray-700 backdrop-blur-sm">
          <span className="text-2xl md:text-3xl font-mono">{value.toString().padStart(2, "0")}</span>
        </div>
        <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-sm -z-10" />
      </div>
      <span className="text-xs mt-2 text-gray-400">{label}</span>
    </div>
  )
}

function SocialLink({ icon, link }: { icon: React.ReactNode; link: string }) {
  return (
    <motion.a
      href={link}
      className="h-10 w-10 rounded-full flex items-center justify-center bg-gray-900/50 border border-gray-700 text-gray-300 hover:text-white hover:border-cyan-500 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
    </motion.a>
  )
}

function Grid() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="h-full w-full flex">
        {/* Vertical lines */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className={cn(
              "h-full w-px bg-gradient-to-b from-transparent via-gray-800/20 to-transparent",
              i % 5 === 0 ? "opacity-20" : "opacity-10",
            )}
            style={{ left: `${(i / 20) * 100}%` }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: i % 5 === 0 ? 0.2 : 0.1 }}
            transition={{ duration: 1.5, delay: i * 0.05 }}
          />
        ))}

        {/* Horizontal lines */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className={cn(
              "w-full h-px bg-gradient-to-r from-transparent via-gray-800/20 to-transparent",
              i % 5 === 0 ? "opacity-20" : "opacity-10",
            )}
            style={{ top: `${(i / 20) * 100}%` }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: i % 5 === 0 ? 0.2 : 0.1 }}
            transition={{ duration: 1.5, delay: i * 0.05 }}
          />
        ))}

        {/* Animated dots at intersections */}
        <div className="absolute inset-0">
          {Array.from({ length: 6 }).map((_, i) =>
            Array.from({ length: 6 }).map((_, j) => (
              <motion.div
                key={`dot-${i}-${j}`}
                className="absolute h-1 w-1 rounded-full bg-cyan-500/50"
                style={{
                  left: `${(i / 5) * 100}%`,
                  top: `${(j / 5) * 100}%`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 4,
                  delay: (i + j) * 0.2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: Math.random() * 2 + 1,
                }}
              />
            )),
          )}
        </div>
      </div>
    </div>
  )
}

