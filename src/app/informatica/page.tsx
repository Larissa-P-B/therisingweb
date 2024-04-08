import NavBar from "@/components/NavBar"
import { ArrowDownZA } from "lucide-react";

export default function Informatica() {
    return (
      <main className="flex min-h-screen flex-col items-center">
        <NavBar active="informatica"/>
        <section className="bg-yellow-400 rounded p-2 m-4">
          <h2 className="text-2xl font-semibold">Informática </h2>
          <div id="data">
            <div className="flex justify-between" id="data-row">
              <span>Informática</span>

              <ArrowDownZA />
            </div>
          </div>
        </section>
      </main>
    );
  }