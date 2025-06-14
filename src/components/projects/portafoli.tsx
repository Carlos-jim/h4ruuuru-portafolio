import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Portafolio() {
  return (
    <div className="grid md:grid-cols-2 gap-12">
      <div className="bg-zinc-900/50 rounded-lg overflow-hidden">
        <Image
          src="/portafolio.png"
          alt="EdgeScripts Project"
          width={800}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="space-y-6">
        <h2 className="text-4xl font-bold">Portafolio</h2>

        <div className="flex gap-3">
          <span className="bg-primario-900/60 text-primario-400 px-3 py-1 rounded-full text-sm">
            Proyecto Personal
          </span>
          <span className="bg-green-900/60 text-green-300 px-3 py-1 rounded-full text-sm">
            En proceso
          </span>
        </div>

        <p className="text-gray-300 text-lg">
          Sitio web personal para mostrar mis proyectos y habilidades como
          desarrollador. Incluye una sección de proyectos, habilidades.
        </p>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Tecnologias usadas</h3>

          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-primario-900/40 text-primario-400 rounded-md text-sm">
              NextJS
            </span>
            <span className="px-3 py-1 bg-primario-900/40 text-primario-400 rounded-md text-sm">
              Typescript
            </span>
            <span className="px-3 py-1 bg-primario-900/40 text-primario-400 rounded-md text-sm">
              Framer Motion
            </span>
            <span className="px-3 py-1 bg-primario-900/40 text-primario-400 rounded-md text-sm">
              Tailwind CSS
            </span>
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <Button className="bg-primario-600 hover:bg-primario-700 text-white px-4 md:px-8 py-4 md:py-6 text-sm md:text-base">
            Ver sitio
          </Button>
          <Link
            href="https://github.com/Carlos-jim/h4ruuuru-portafolio"
            target="_blank"
          >
            <Button
              variant="outline"
              className="hover:bg-zinc-800 text-black px-4 md:px-8 py-4 md:py-6 text-sm md:text-base"
            >
              Ver código
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
