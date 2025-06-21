"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import FreewayAirlines from "@/components/projects/freeway";
import SistemaDonaciones from "@/components/projects/donaciones";
import Inventory from "@/components/projects/inventory";
import Portafolio from "@/components/projects/portafoli";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function AnimatedSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

export default function ProjectsPage() {
  return (
    <motion.div className="min-h-screen bg-[#0c081d] text-white">
      <main className="container mx-auto px-4 py-12">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Proyectos
        </motion.h1>
        <motion.p
          className="text-xl text-gray-400 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          Todos mis proyectos
        </motion.p>

        <div className="space-y-24">
          <AnimatedSection>
            <SistemaDonaciones />
          </AnimatedSection>
          <AnimatedSection>
            <FreewayAirlines />
          </AnimatedSection>
          <AnimatedSection>
            <Inventory />
          </AnimatedSection>
          <AnimatedSection>
            <Portafolio />
          </AnimatedSection>
        </div>
      </main>
    </motion.div>
  );
}
