

import { ArrowDownZA } from "lucide-react";

interface PapelariaItemProps {
    papelaria: {
        id: number,
        nome: string,
        tipo: string
    }
}

export function PapelariaItem(props: PapelariaItemProps){
    const { papelaria } = props
    return (
        <div key={papelaria.id} className="flex justify-between py-2" id="data-row">
            <div className="flex gap-1 items-center">
                 <span>name={papelaria.tipo}</span>
                <span>{papelaria.nome}</span>
            </div>
           
            <ArrowDownZA />
        </div>
    )
}