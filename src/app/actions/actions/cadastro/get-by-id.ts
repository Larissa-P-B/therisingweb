"use server"

export async function getById(id: number){

    const resp = await fetch(`${process.env.API_THERISING}/cadastro/${id}`, {next: {revalidate: 0}})

    if (!resp.ok){
        throw new Error("cadastro não encontrada")
    }

    return await resp.json()

}