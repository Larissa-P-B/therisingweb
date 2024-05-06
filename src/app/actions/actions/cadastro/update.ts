"use server"

import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export async function update(prevState: any, formData: FormData){
    await new Promise(r => setTimeout(r, 1000))

    const id = formData.get("id")
    
    const data = {
      nome: formData.get("nome"),
      cpf:formData.get("cpf"),
      email:formData.get("email"),
      senha:formData.get("senha"),
    }

    const options = {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }

    const resp = await fetch(`${process.env.API_THERISING}/cadastro/${id}`, options)
    
    if (resp.ok){
      revalidateTag("cadastro")
      redirect("/cadastro")
    }

    if (resp.status == 400){
      return {
        messageNome: "Validação falhou"
      }
    }

    if (resp.status == 404){
      return {
        messageNome: "Cadastro não encontrada"
      }
    }
    
  }