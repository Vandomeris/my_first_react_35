import { useEffect, useState } from "react"
import CreateBook from "../components/CreateBook"
import { NavLink } from "react-router"

export default function BooksPage() {

    const [books, setBooks] = useState([])


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
                        <NavLink to={`/books/${book.id}`} className="flex flex-col gap-4">
                            <h3 className="text-center font-bold text-xl">{book.title}</h3>
                            <p>{book.pageCount} страниц</p>
                            <p>{book.description}</p>

                            <p className="w-full truncate">{book.excerpt}</p>
                        </NavLink>
                    ))
                }
            </div>



        </div>
    )
}
