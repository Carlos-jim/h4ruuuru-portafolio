"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      staggerChildren: 0.7,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function SistemaDonaciones() {
  return (
    <motion.div
      className="grid md:grid-cols-2 gap-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="bg-zinc-900/50 rounded-lg overflow-hidden"
        variants={itemVariants}
      >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/donaciones.png"
            alt="EdgeScripts Project"
            width={800}
            height={600}
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </motion.div>

      <motion.div className="space-y-6" variants={itemVariants}>
        <motion.h2 className="text-4xl font-bold" variants={itemVariants}>
          Sistema de Donaciones
        </motion.h2>

        <motion.div className="flex gap-3" variants={itemVariants}>
          <span className="bg-primario-900/60 text-primario-400 px-3 py-1 rounded-full text-sm">
            Proyecto Academico
          </span>
          <span className="bg-green-900/60 text-green-300 px-3 py-1 rounded-full text-sm">
            En proceso
          </span>
        </motion.div>

        <motion.p className="text-gray-300 text-lg" variants={itemVariants}>
          Sistema para gestionar donaciones de madicamentos, permitiendo a los
          usuarios donar, ver el historial de donaciones y administrar los
          medicamentos.
        </motion.p>

        <motion.div className="space-y-4" variants={itemVariants}>
          <h3 className="text-xl font-semibold">Tecnologias usadas</h3>

          <div className="flex flex-wrap gap-3">
            {[
              "NextJS",
              "Typescript",
              "NodeJS",
              "ExpressJS",
              "PostgresSQL",
              "Framer Motion",
              "Tailwind CSS",
              "PostGIS",
              "Amazon Web Services",
            ].map((tech) => (
              <motion.span
                key={tech}
                className="px-3 py-1 bg-primario-900/40 text-primario-400 rounded-md text-sm"
                variants={itemVariants}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div className="flex gap-4 pt-4" variants={itemVariants}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={"https://sistema-donaciones-six.vercel.app/dashboard"}
              target="_blank"
            >
              <Button className="bg-primario-600 hover:bg-primario-700 text-white px-4 md:px-8 py-4 md:py-6 text-sm md:text-base">
                Ver sitio
              </Button>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="https://github.com/Carlos-jim/sistema-donaciones"
              target="_blank"
            >
              <Button
                variant="outline"
                className="hover:bg-zinc-800 text-black px-4 md:px-8 py-4 md:py-6 text-sm md:text-base"
              >
                Ver código
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
