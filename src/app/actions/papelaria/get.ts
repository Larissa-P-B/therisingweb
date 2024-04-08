export async function getPapelaria() {
    const resp = await fetch(`${process.env.API_THERISING}/papelaria`, { next: { revalidate: 0 } })
    return await resp.json()
}