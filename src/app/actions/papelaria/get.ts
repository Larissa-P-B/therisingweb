export async function getCadastroLogin() {
    const resp = await fetch(`${process.env.API_THERISING}/cadastrologin`, { next: { revalidate: 0 } })
    return await resp.json()
}