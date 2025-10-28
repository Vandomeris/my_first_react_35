import { useContext, useEffect, useState } from "react"
import CreateBook from "../components/CreateBook"
import { NavLink } from "react-router"
import { CartContext } from "../stores"

export default function BooksPage() {

    const [books, setBooks] = useState([])

    const [cart, setCart] = useContext(CartContext)

    function addToCart(item) {
        setCart(
            [
                ...cart,
                item
            ]
        )
    }


    console.log(cart)

    useEffect(() => {


        async function getBooks() {
            const resp = await fetch('https://fakerestapi.azurewebsites.net/api/v1/Books')
            const data = await resp.json()
            setBooks(data)
        }

        getBooks()

    }, [])

    return (
        <div>
            <h1>Каталог книг</h1>


            <CreateBook />


            <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-5 mt-10">
                {
                    books.map((book) => (
                        <div>


                            <NavLink to={`/books/${book.id}`} className="flex flex-col gap-4">
                                <h3 className="text-center font-bold text-xl">{book.title}</h3>
                            </NavLink>
                            <p>{book.pageCount} страниц</p>
                            <p>{book.description}</p>

                            <p className="w-full truncate">{book.excerpt}</p>
                            <button
                                className="bg-green-600 text-white p-2 cursor-pointer"
                                onClick={() => addToCart(book)}
                            >Купить книгу</button>
                        </div>
                    ))
                }
            </div>



        </div>
    )
}
