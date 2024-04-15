import NavBar from "@/components/NavBar"



import { ArrowDownZA } from "lucide-react";

interface Papelaria{
  id:number,
  nome:string,
  tipo:string
}

export default async function Papelaria() {

  // const papel:Papelaria[] = await getPapelaria()
  
    
    return (
      <main className="flex min-h-screen flex-col items-center">
        <NavBar active = "papelaria"/>
        <section className="bg-yellow-400 rounded p-2 m-4">
          <h2 className="text-2xl font-semibold">Papelaria </h2>
          <div id="data">
            <div className="flex justify-between" id="data-row">
              <span>Papelaria</span>

              <ArrowDownZA />
            </div>
          </div>
        </section>

        
       
        
      </main>
    );
  }