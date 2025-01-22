"use client";

import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import TechStack from "./mySkillsPage";

// Data for the main slider
const slides = [
  {
    id: 1,
    title: "CARLOS JIMENEZ",
    subtitle: "FRONTEND DEVELOPMENT",
    description:
      "Hola, soy Carlos Jimenez, un desarrollador frontend con experiencia en tecnologías modernas como React, Next.js, Tailwind CSS, TypeScript, y más. Actualmente curso mis ultimos años en la Licenciatura en informática la cual me ha ayudado a adquirir conocimientos en el desarrollo de software, diseño de interfaces, y más.",
    image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    content: "TechStack",
  },
  {
    id: 3,
    title: "DELIVER",
    subtitle: "OUR PROMISE",
    description:
      "Consistently deliver exceptional results that exceed expectations and drive business success.",
    image: "/placeholder.svg?height=1080&width=1920",
  },
];

export function FullscreenSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0); // Para almacenar la posición de inicio del toque
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
      if (e.deltaY > 0) {
        handleScroll("next");
      } else {
        handleScroll("prev");
      }
    };

    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (slider) {
        slider.removeEventListener("wheel", handleWheel);
      }
    };
  }, [currentSlide, isTransitioning]);

  // Detectar el deslizamiento en dispositivos móviles
  const handleTouchStart = (e: React.TouchEvent) => {
    const touchStart = e.touches[0].clientY; // Obtener la posición Y inicial
    setTouchStartY(touchStart);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientY; // Obtener la posición Y final
    const touchDiff = touchStartY - touchEnd; // Calcular la diferencia de Y

    if (Math.abs(touchDiff) > 50) {
      if (touchDiff > 0) {
        handleScroll("next"); // Deslizar hacia arriba, siguiente slide
      } else {
        handleScroll("prev"); // Deslizar hacia abajo, slide anterior
      }
    }
  };

  return (
    <div
      className="relative h-screen w-full overflow-hidden"
      onTouchStart={handleTouchStart} // Detectar inicio del toque
      onTouchEnd={handleTouchEnd}   // Detectar final del toque
    >
      <div
        ref={sliderRef}
        className="h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateY(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) =>
          slide.content === "TechStack" ? (
            <div
              key={slide.id}
              className="relative h-screen w-full flex items-center justify-center"
              style={{ backgroundColor: "#1a1f2e" }}
            >
              <TechStack />
            </div>
          ) : (
            <div
              key={slide.id}
              className="relative h-screen w-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #1e3a8a 0%, #4c1d95 100%)",
              }}
            >
              <div className="absolute inset-0">
                <img
                  src={slide.image || "/placeholder.svg"}
                  alt=""
                  className="h-full w-full object-cover opacity-80"
                />
              </div>
              <div className="relative z-10 container mx-auto px-6 sm:px-12">
                <span className="text-white/80 text-sm sm:text-xl mb-4 block">
                  {slide.subtitle}
                </span>
                <h1 className="text-white text-4xl sm:text-8xl font-bold mb-8">
                  {slide.title}
                </h1>
                <p className="text-white/80 text-sm sm:text-xl max-w-2xl mb-12">
                  {slide.description}
                </p>
                <button className="text-white border-b-2 border-white pb-2 flex items-center text-sm sm:text-lg hover:border-white/70 transition-colors">
                  Descargar CV
                  <Download className="h-5 w-5 sm:h-6 sm:w-6 ml-2" />
                </button>
              </div>
            </div>
          )
        )}
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
              style={{
                width: `${((currentSlide + 1) / slides.length) * 100}%`,
              }}
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
