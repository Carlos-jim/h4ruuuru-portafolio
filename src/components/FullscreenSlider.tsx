"use client";

import {
  ChevronLeft,
  ChevronRight,
  Download,
  Github,
  Linkedin,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import TechStack from "./page/mySkillsPage";
import SliderProjects from "./page/projectPage";
import { slides } from "@/data/dataSlides";
import { downloadCV } from "@/config/downloadcv";

type Slide = {
  id: string | number;
  image?: string;
  subtitle?: string;
  title?: string;
  description?: string;
  content?: string;
  showButtons?: boolean;
  githubUrl?: string;
  linkedinUrl?: string;
};

function SlideContent({ slide }: { slide: Slide }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <div
      ref={ref}
      className="relative h-screen w-full flex items-center justify-center"
      style={{
        background:
          slide.content === "TechStack"
            ? "#1a1f2e"
            : slide.content === "SliderProjects"
            ? "#0c081d"
            : "linear-gradient(135deg, #1e3a8a 0%, #4c1d95 100%)",
      }}
    >
      {slide.content === "TechStack" && <TechStack />}
      {slide.content === "SliderProjects" && <SliderProjects />}
      {!slide.content && (
        <>
          <div className="absolute inset-0">
            <img
              src={slide.image || "/placeholder.svg"}
              alt=""
              className="h-full w-full object-cover opacity-80"
            />
          </div>
          <div className="relative z-10 container mx-auto px-6 sm:px-12">
            <motion.span
              className="text-white/80 text-sm sm:text-xl mb-4 block"
              initial={{ x: "-100%" }}
              animate={inView ? { x: 0 } : {}}
              transition={{ duration: 1 }}
            >
              {slide.subtitle}
            </motion.span>
            <motion.h1
              className="text-white text-4xl sm:text-8xl font-bold mb-8"
              initial={{ y: "-100%" }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 1 }}
            >
              {slide.title}
            </motion.h1>
            <motion.p
              className="text-white/80 text-sm sm:text-xl max-w-2xl mb-12"
              initial={{ x: "100%" }}
              animate={inView ? { x: 0 } : {}}
              transition={{ duration: 1 }}
            >
              {slide.description}
            </motion.p>
            <motion.button
              className="text-white border-b-2 border-white pb-2 flex items-center text-sm sm:text-lg hover:border-white/70 transition-colors"
              initial={{ y: "100%" }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 1 }}
              onClick={downloadCV}
            >
              Descargar CV
              <Download className="h-5 w-5 sm:h-6 sm:w-6 ml-2" />
            </motion.button>
            {slide.showButtons && (
              <div className="mt-8 flex items-center gap-4">
                <motion.a
                  href={slide.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1, delay: 1.2 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <Github size={24} color="#ffffff" />
                </motion.a>
                <motion.a
                  href={slide.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1, delay: 1.4 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <Linkedin size={24} color="#ffffff" />
                </motion.a>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export function FullscreenSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "next" | "prev") => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    const newSlide =
      direction === "next"
        ? (currentSlide + 1) % slides.length
        : (currentSlide - 1 + slides.length) % slides.length;

    setCurrentSlide(newSlide);

    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateY(-${newSlide * 100}%)`;
    }

    setTimeout(() => setIsTransitioning(false), 1000);
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0) handleScroll("next");
      else handleScroll("prev");
    };

    const slider = sliderRef.current;
    if (slider) slider.addEventListener("wheel", handleWheel, { passive: false });
    return () => slider?.removeEventListener("wheel", handleWheel);
  }, [currentSlide, isTransitioning]);

  const handleTouchStart = (e: React.TouchEvent) => setTouchStartY(e.touches[0].clientY);

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartY - e.changedTouches[0].clientY;
    if (Math.abs(diff) > 50) handleScroll(diff > 0 ? "next" : "prev");
  };

  return (
    <div
      className="relative h-screen w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        ref={sliderRef}
        className="h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateY(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <SlideContent key={slide.id} slide={slide} />
        ))}
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-8 text-white/80">
        <button
          onClick={() => handleScroll("prev")}
          className="p-2 hover:text-white transition-colors"
          disabled={isTransitioning}
        >
          <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
        </button>
        <div className="flex items-center gap-4 font-medium">
          <span>{String(currentSlide + 1).padStart(2, "0")}</span>
          <div className="w-12 h-px bg-white/30">
            <div
              className="h-full bg-white transition-all duration-1000"
              style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            />
          </div>
          <span>{String(slides.length).padStart(2, "0")}</span>
        </div>
        <button
          onClick={() => handleScroll("next")}
          className="p-2 hover:text-white transition-colors"
          disabled={isTransitioning}
        >
          <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
        </button>
      </div>
    </div>
  );
}
