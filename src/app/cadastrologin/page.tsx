import NavBar from "@/components/NavBar"
import {  Button, Input } from "@nextui-org/react";

import { create } from "../actions/papelaria/create";
import { SubmitButton } from "@/components/SubmitButton";
import Link from "next/link";
import {  RotateCw } from "lucide-react";
import React from "react";

;



export default function CadastroLogin() {


  
    return (
      <main className="flex min-h-screen flex-col items-center">
        <NavBar active="Entre/Cadastre-se"/>
        
        <form action={create} className="flex flex-col gap-3 bg-amber-950 p-6 m-6 rounded min-w-[500px]">
        <h2 className="text-2xl font-bold">Cadastro de Usuario</h2>
        <Input key="nome"label="Nome"name="nome"labelPlacement={"outside"}/>
        <Input key="email"label="Email"name="email"labelPlacement={"outside"}/>
        <Input key="cpf"label="CPF"name="cpf"labelPlacement={"outside"}/>
        <Input key="senha" label="Senha"name="password" labelPlacement={"outside"}/>


        <div className="flex justify-around mt-4">
          <Link href="/">
            <Button color="danger" variant="bordered" startContent={<RotateCw />}>cancelar</Button>
          </Link>
          <SubmitButton />
        </div>
      </form>

      
      </main>
    );
  }