import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="max-w-6xl mx-auto p-6">
        <div className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800">
          <div className="p-6 md:p-10">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-900/50 text-purple-400 text-sm font-medium mb-4">
                  <Star className="h-4 w-4 mr-1 fill-purple-400" />
                  Featured Project
                </div>
                <h2 className="text-3xl font-bold mb-1">Sistema Experto</h2>
                <p className="text-zinc-400">Proyecto Academico</p>
              </div>
            </div>

            <p className="text-lg text-zinc-300 mb-8 max-w-3xl">
              Un sistema experto en donde el usuario puede saber el phylum del
              animal que esta buscando mediante preguntas cerradas. Esta hecho
              para personas con poco conocimiento en el area de biologia
            </p>

            <div className="mb-8">
              <Image
                src="/expertsystem.png"
                alt="Trading Platform Screenshot"
                width={800}
                height={400}
                className="rounded-lg w-full object-cover"
              />
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">Main features:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="h-2 w-2 bg-bg-text-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-zinc-300">
                    Interactive charts with multiple timeframes and technical
                    analysis tools
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-2 w-2 bg-bg-text-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-zinc-300">
                    Exchange API integration for real-time trading
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-2 w-2 bg-bg-text-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-zinc-300">
                    Risk management system and position calculator
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-2 w-2 bg-bg-text-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-zinc-300">
                    Customizable dashboard with technical indicators
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-2 w-2 bg-bg-text-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-zinc-300">
                    Detailed trading history and performance analytics
                  </span>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">Tecnologias usadas</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-bg-text-900/40 text-bg-text-400 rounded-md text-sm">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-bg-text-900/40 text-bg-text-400 rounded-md text-sm">
                  Typescript
                </span>
                <span className="px-3 py-1 bg-bg-text-900/40 text-bg-text-400 rounded-md text-sm">
                  Python
                </span>
                <span className="px-3 py-1 bg-bg-text-900/40 text-bg-text-400 rounded-md text-sm">
                  Docker
                </span>
                <span className="px-3 py-1 bg-bg-text-900/40 text-bg-text-400 rounded-md text-sm">
                  PostgreSQL
                </span>
                <span className="px-3 py-1 bg-bg-text-900/40 text-bg-text-400 rounded-md text-sm">
                  Tailwind CSS
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-bg-text-500 hover:bg-bg-text-600 text-white px-8 py-6">
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M16 12L10 16.3301V7.66987L16 12Z"
                    fill="currentColor"
                  />
                </svg>
                View Demo
              </Button>
              <Button
                variant="outline"
                className="border-zinc-700 hover:bg-zinc-800 text-white px-8 py-6"
              >
                View Code
              </Button>
            </div>
            <div className="flex align-items-center justify-end mt-8">
              <Button className="bg-bg-text-500 hover:bg-bg-text-600 text-white px-8 py-6">
                Ver más proyectos
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
