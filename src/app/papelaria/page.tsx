import NavBar from "@/components/NavBar"

import Link from "next/link";
import { PapelariaItem } from "./PapelariaItem";
import { getPapelaria } from "../actions/papelaria/get";

interface Papelaria{
  id:number,
  nome:string,
  tipo:string
}

export default async function Papelaria() {

  const papel:Papelaria[] = await getPapelaria()
  
    
    return (
      <main className="flex min-h-screen flex-col items-center">
        <NavBar active = "papelaria"/>

        <section className="bg-yellow-400 rounded p-2 m-4 min-w-[500px]">
          <div className="flex justify-between">
            <h2 className="text-2xl font-semibold">Papelaria </h2>
            <Link href="/papelaria/cadernos">Cadernos</Link>
            </div>
            <div id="data">
            {papel.map(p => <PapelariaItem papelaria={p} />)}
            </div>
           
          
        </section>   
        
      </main>
    );
  }