"use client"
import NavBar from "@/components/NavBar";
import { SubmitButton } from "@/components/SubmitButton";
import { Button, Input } from "@nextui-org/react";
import { create } from "domain";
import { RotateCw } from "lucide-react";
import Link from "next/link";

export default function Login() {




  
    return (
      <main className="flex min-h-screen flex-col items-center">
        <NavBar active="login"/>
        
        <form action={create} className="flex flex-col gap-3 bg-amber-950 p-6 m-6 rounded min-w-[500px]">
        <h2 className="text-2xl font-bold">Login</h2>
        
        <Input key="email" variant="bordered" label="Email"name="email"labelPlacement={"outside"}/>
        
        <Input key="senha" variant="bordered" label="Senha"name="senha" labelPlacement={"outside"}/>


        <div className="flex justify-around mt-4">
          <Link href="/cadastro" >
            <Button  color="danger" variant="bordered" startContent={<RotateCw />}>cancelar</Button>
          </Link>
          <SubmitButton />
        </div>
      </form>

      
      </main>
    );
  }