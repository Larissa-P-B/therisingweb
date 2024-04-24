"use server"

import { redirect } from "next/navigation"

export async function create(formData: FormData){
    await new Promise(r => setTimeout(r, 3000))
    
    const data = {
      nome: formData.get("nome"),
      cpf:formData.get("cpf"),
      email:formData.get("email"),
      senha:formData.get("senha"),
      
    }

    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }

    const resp = await fetch(`${process.env.API_THERISING}/cadastro`, options)

    if (resp.status == 200) redirect("/login")
  }