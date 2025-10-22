import { useEffect, useState } from "react"
import CreateBook from "../components/CreateBook"

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


            <div>
                {
                    books.map((book) => (
                        <div>
                            <h3>{book.title}</h3>
                            <p>{book.pageCount} страниц</p>
                            <p>{book.description}</p>
                        </div>
                    ))
                }
            </div>



        </div>
    )
}
