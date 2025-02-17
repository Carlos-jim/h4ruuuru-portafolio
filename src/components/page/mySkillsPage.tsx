"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { technologies } from "@/data/dataSkills";
import { useRef } from "react"; 

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 }, // Los íconos aparecen desde abajo
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  hover: { scale: 1.1, transition: { duration: 0.3 } }, // Efecto de hover
};

export default function TechStack() {
  const ref = useRef(null); // Referencia para el contenedor
  const isInView = useInView(ref, { once: true }); // Detecta si el contenedor está en la vista

  return (
    <div className="h-screen w-full bg-[#0c081d] relative overflow-hidden flex items-center justify-center p-8">
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#7ccefd] to-transparent blur-sm" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7ccefd] to-transparent" />

      {/* Contenedor de las tecnologías */}
      <motion.div
        ref={ref} // Asigna la referencia al contenedor
        className="flex flex-wrap justify-center items-center gap-8 md:gap-16 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Activa la animación solo cuando está en la vista
      >
        {technologies.map((tech) => (
          <motion.div
            key={tech.name}
            className="relative group"
            variants={itemVariants}
            whileHover="hover"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-[#36b6fa] to-[#36b6fa] rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />
            <div className="relative h-16 w-16 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="w-12 h-12 relative">
                  <Image
                    src={tech.logo || "/placeholder.svg"}
                    alt={`${tech.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-xs mt-2 block opacity-80">{tech.name}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}