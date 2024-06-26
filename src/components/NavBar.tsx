
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";


interface NavBarProps{
  active:"home"|"papelaria"|"escritorio"|"informatica"|"<ShoppingCartIcon/>"|"Entre/Cadastre-se"|"login"
 
}
export default function NavBar(props: NavBarProps) {
  const {active} = props
  
  const classActive = "border-yellow-300 border-b-4 pb-2"
  return(
    <nav className="flex justify-between items-center bg-orange-700 w-full px-4 py-2" >
        <h1 className="text-4xl font-extrabold text-yellow-500">The Rising Sun</h1>
        
        
        <ul className="flex gap-14 font-bold">
          <li className={active == "home"? classActive : ""}><Link href="/">Home </Link></li>
          <li className={active == "papelaria"? classActive : ""}><Link href="/papelaria">Papelaria </Link></li>
          <li className={active == "escritorio"? classActive : ""}><Link href="/escritorio">Escritório</Link></li>
          <li className={active == "informatica"? classActive : ""}><Link href="/informatica">Informática</Link></li>
        </ul>
        <div className="flex gap-4">
          <button className={active == "Entre/Cadastre-se"? classActive : ""}><Link href="/cadastro">Entre/Cadastre-se</Link></button>
          <button className={active == "<ShoppingCartIcon/>"? classActive : ""}><Link href="/compras">{<ShoppingCartIcon/>}</Link></button>
        </div>
        <div className="w-16 rounded-full overflow-hidden">
          <img src="https://i.pravatar.cc/300" alt="avatar do usuario"/>
        </div>
    </nav>
  )
}