import NavBar from "@/components/NavBar"

export default function Escritorio() {
    return (
      <main className="flex min-h-screen flex-col items-center">
        <NavBar active="escritorio"/>
        <h1>Escritorio</h1>
      </main>
    );
  }