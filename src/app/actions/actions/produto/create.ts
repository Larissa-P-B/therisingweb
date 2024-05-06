"use server"

import { redirect } from "next/navigation"

export async function create(formData: FormData){
    await new Promise(r => setTimeout(r, 3000))
    
    const data = {
      nome: formData.get("nome"),
      tipo:formData.get("tipo"),
      imagem:formData.get("imagem"),
      descricao:formData.get("descricao"),
      preco:formData.get("preco"),
      quantidadeDisponivel:formData.get("quantidadeDisponivel")
      
    }

    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }

    const resp = await fetch(`${process.env.API_THERISING}/produto`, options)

    if (resp.status == 200) redirect("/compras")
  }