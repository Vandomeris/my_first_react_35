import { useEffect, useState } from "react"
import { useParams } from "react-router"

export default function BookCardPage() {
    const { id } = useParams()

    const [book, setBook] = useState(null)

    useEffect(() => {


        async function getBooks() {
            const resp = await fetch(`https://fakerestapi.azurewebsites.net/api/v1/Books/${id}`)
            const data = await resp.json()
            setBook(data)
        }

        getBooks()

    }, [])

    return (
        <div>
            {
                book && (
                    <div className="flex flex-col gap-4">
                        <h3 className="text-center font-bold text-xl">{book.title}</h3>
                        <p>{book.pageCount} страниц</p>
                        <p>{book.description}</p>
                        <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=Book 1&w=250&h=350" alt="" />
                        <p className="w-full truncate">{book.excerpt}</p>
                    </div>
                )
            }
        </div>


    )
}
