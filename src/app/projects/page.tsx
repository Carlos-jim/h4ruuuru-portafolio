"use client";
import FreewayAirlines from "@/components/projects/freeway";
import SistemaDonaciones from "@/components/projects/donaciones";
import Inventory from "@/components/projects/inventory";
import Portafolio from "@/components/projects/portafoli";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.25,
    },
  },
};

export default function ProjectsPage() {
  return (
    <motion.div
      className="min-h-screen bg-[#0c081d] text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <main className="container mx-auto px-4 py-12">
        <motion.h1 className="text-5xl font-bold mb-4" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          Proyectos
        </motion.h1>
        <motion.p className="text-xl text-gray-400 mb-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.4 }}>
          Todos mis proyectos
        </motion.p>

        <motion.div className="space-y-24" variants={containerVariants}>
          <motion.div variants={containerVariants}>
            <SistemaDonaciones />
          </motion.div>
          <motion.div variants={containerVariants}>
            <FreewayAirlines />
          </motion.div>
          <motion.div variants={containerVariants}>
            <Inventory />
          </motion.div>
          <motion.div variants={containerVariants}>
            <Portafolio />
          </motion.div>
        </motion.div>
      </main>
    </motion.div>
  );
}
