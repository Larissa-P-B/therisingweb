
import Link from "next/link";

export default function Notfound() {
    return (
      <main className="flex min-h-screen flex-col items-center">
       
        <h1 className="text-xl font-bold">Erro</h1>
        <p>Página não encontrada</p>
        <Link href= "/">Voltar para página inicial</Link>
      </main>
    );
  }