"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { technologies } from "@/data/dataSkills";

export default function TechStack() {
  return (
    <div className="h-screen w-full bg-[#0c081d] relative overflow-hidden flex items-center justify-center p-8">
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#7ccefd] to-transparent blur-sm" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7ccefd]-500 to-transparent" />

      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 max-w-4xl mx-auto">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.2,
              filter: "brightness(1.2)",
              transition: { duration: 0.2 },
            }}
            className="relative group"
          >
            <div
              className="absolute -inset-2 bg-gradient-to-r from-[#36b6fa] to-[#36b6fa] rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"
            />
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
      </div>
    </div>
  );
}
