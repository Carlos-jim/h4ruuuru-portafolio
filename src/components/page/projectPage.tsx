import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SliderProjects() {
  return (
    <div className="min-h-screen bg-[#0c081d] text-white">
      <main className="max-w-8xl mx-auto p-6">
        <div className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800">
          <div className="p-6 md:p-10">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-2">
              <div>
                <h2 className="text-3xl font-bold mb-1">Sistema Expertos</h2>
                <p className="text-zinc-400">Proyecto Personal</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <Image
                  src="/expertsystem.png"
                  alt="Expert System"
                  width={600}
                  height={600}
                  className="rounded-lg w-full object-cover"
                />
                <div className="flex flex-row gap-4 pt-4 flex-wrap">
                  <Link
                    href="https://expertsystem-pi.vercel.app/home"
                    target="_blank"
                  >
                    <Button className="bg-primario-600 hover:bg-primario-700 text-white px-4 md:px-8 py-4 md:py-6 text-sm md:text-base">
                      View Demo
                    </Button>
                  </Link>
                  <Link
                    href="https://github.com/Carlos-jim/expertsystem"
                    target="_blank"
                  >
                    <Button
                      variant="outline"
                      className="hover:bg-zinc-800 text-black px-4 md:px-8 py-4 md:py-6 text-sm md:text-base"
                    >
                      View Code
                    </Button>
                  </Link>
                </div>
              </div>
              <div>
                <p className="text-lg text-zinc-300 mb-8">
                  Un sistema experto que ayuda a personas con poco conocimiento
                  en biologia a identificar los Phylum de un animal
                </p>

                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-4">
                    Caracteristicas principales:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-primario-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-zinc-300">
                        Chat interactivo para el usuario
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-primario-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-zinc-300">
                        Integración con redes neuronales para el aprendizaje
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-primario-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-zinc-300">
                        Detalles de cada phylum para su facil comprensión
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-4">
                    Tecnologias usadas:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primario-900/40 text-primario-400 rounded-md text-sm">
                      Next.js
                    </span>
                    <span className="px-3 py-1 bg-primario-900/40 text-primario-400 rounded-md text-sm">
                      Typescript
                    </span>
                    <span className="px-3 py-1 bg-primario-900/40 text-primario-400 rounded-md text-sm">
                      Python
                    </span>
                    <span className="px-3 py-1 bg-primario-900/40 text-primario-400 rounded-md text-sm">
                      Docker
                    </span>
                    <span className="px-3 py-1 bg-primario-900/40 text-primario-400 rounded-md text-sm">
                      Pyke
                    </span>
                    <span className="px-3 py-1 bg-primario-900/40 text-primario-400 rounded-md text-sm">
                      Framer Motion
                    </span>
                    <span className="px-3 py-1 bg-primario-900/40 text-primario-400 rounded-md text-sm">
                      Tailwind CSS
                    </span>
                  </div>
                </div>
                <div className="flex align-items-center justify-end mt-8">
                  <Link href="/soon">
                    <Button className="bg-primario-600 hover:bg-primario-700 text-white px-8 py-6">
                      Ver más proyectos
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
