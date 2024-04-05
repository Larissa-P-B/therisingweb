import NavBar from "@/components/NavBar";




export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="home"/>
      <h1>Home</h1>
    </main>
  );
}
