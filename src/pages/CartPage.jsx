import { useContext } from "react"
import { CartContext } from "../stores"

export default function CartPage() {

    const [cart, setCart] = useContext(CartContext)

    return (
        <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-5 mt-10">
            {
                cart.map((book) => (
                    <div>
                        <h3 className="font-bold text-xl">{book.title}</h3>
                        <p>{book.pageCount} страниц</p>
                        <p>1000$</p>
                    </div>
                ))
            }
        </div>
    )
}
