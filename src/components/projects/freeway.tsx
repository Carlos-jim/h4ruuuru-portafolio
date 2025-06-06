import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
    
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold mb-4">Proyectos</h1>
        <p className="text-xl text-gray-400 mb-16">Todos mis proyectos</p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-zinc-900/50 rounded-lg overflow-hidden">
            <Image
              src="/freeway.png"
              alt="EdgeScripts Project"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Freeway</h2>

            <div className="flex gap-3">
              <span className="bg-purple-900/60 text-purple-300 px-3 py-1 rounded-full text-sm">Personal project</span>
              <span className="bg-amber-900/60 text-amber-300 px-3 py-1 rounded-full text-sm">In progress</span>
            </div>

            <p className="text-gray-300 text-lg">
              Platform for selling scripts and automated tools for online games. Developed with modern technologies to
              provide a smooth and secure user experience.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Tech stack</h3>

              <div className="flex flex-wrap gap-3">
                <span className="bg-zinc-800 text-white px-4 py-2 rounded-full text-sm">
                  React and Vite for a modern and fast user interface
                </span>
                <span className="bg-zinc-800 text-white px-4 py-2 rounded-full text-sm">
                  Node.js for robust and scalable backend
                </span>
                <span className="bg-zinc-800 text-white px-4 py-2 rounded-full text-sm">
                  Firebase for authentication and real-time database
                </span>
                <span className="bg-zinc-800 text-white px-4 py-2 rounded-full text-sm">
                  Stripe for secure payment processing
                </span>
                <span className="bg-zinc-800 text-white px-4 py-2 rounded-full text-sm">
                  Render for continuous and reliable deployment
                </span>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button className="bg-purple-600 hover:bg-purple-700">
                <ExternalLink className="w-4 h-4 mr-2" />
                Visit site
              </Button>
              <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

