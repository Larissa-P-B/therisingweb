import NavBar from "@/components/NavBar"
import { ArrowDownZA, SquareX } from "lucide-react";

export default function Compras() {
    return (
      <main className="flex min-h-screen flex-col items-center">
        <NavBar active="<ShoppingCartIcon/>"/>
        <section className="bg-yellow-400 rounded p-2 m-4">
          <h2 className="text-2xl font-semibold">Compras </h2>
          <div id="data">
            <div className="flex justify-between" id="data-row">
              <span>Compras</span>

              <ArrowDownZA />
            </div>
          </div>
        </section>
        <div className="bg-yellow-950">
            <table className="border-solid p-3 border-black text-center text-orange-500">
                <thead className=" border-solid p-3  border-black">
                    

                        <th className=" border-2  border-black">Categoria</th>
                        <th className=" border-2  border-black">Produto</th>
                        <th className=" border-2  border-black">Quantidade</th>
                        <th className=" border-2  border-black">Preço</th>
                        
                   
                </thead>
                <tbody className=" border-solid   p-3  border-black">
                   
                        <td className=" border-2  border-black">papelaria</td>
                        <td className=" border-2   border-black">caderno</td>
                        <td className=" border-2  border-black">1</td>
                        <td className=" border-2   border-black">R$50,00</td>

                    
                    
                <button  ><SquareX color="#f60404" /></button>
                    
                </tbody>
                <tbody className=" border-solid   p-3  border-black">
                    
                        <td className=" border-2  border-black">escritorio</td>
                        <td className=" border-2   border-black">caneta</td>
                        <td className=" border-2  border-black">1</td>
                        <td className=" border-2   border-black">R$100,00</td>

                    
                    
                <button ><SquareX color="#f60404" /></button>
                    
                </tbody>
                
            </table>
        </div>
        <div>
            <p>Total da compra: </p>
        </div>
            
      </main>
    );
  }