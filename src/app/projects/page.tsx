import FreewayAirlines from "@/components/projects/freeway";
import Inventory from "@/components/projects/inventory";
import Portafolio from "@/components/projects/portafoli";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0c081d] text-white">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold mb-4">Proyectos</h1>
        <p className="text-xl text-gray-400 mb-16">Todos mis proyectos</p>

        <div className="space-y-24">
          <div>
            <FreewayAirlines />
          </div>
          <div>
            <Inventory />
          </div>
          <div>
            <Portafolio />
          </div>
        </div>
      </main>
    </div>
  );
}
