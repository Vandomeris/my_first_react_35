import { NavLink, Outlet } from "react-router";
import { CartContext } from "../stores";
import { useState } from "react";

export default function MainLayout() {

    const [cart, setCart] = useState([])

    return (
        <CartContext value={[cart, setCart]}>
            <div className="container mx-auto flex flex-col min-h-screen">
                <header className="flex justify-center items-center gap-x-5 py-4 mb-10">
                    <div className="text-2xl font-bold">LOGO</div>

                    <nav className="flex gap-x-4">
                        <NavLink to="/">Главная</NavLink>
                        <NavLink to="/admin">Админ-панель</NavLink>
                        <NavLink to="/quizes">Квизы</NavLink>
                        <NavLink to="/books">Книги</NavLink>
                        <NavLink to="/cart">Корзина</NavLink>
                    </nav>
                </header>

                <main><Outlet /></main>

                <footer className="mt-auto">Подвал. Все права защищены</footer>
            </div>
        </CartContext>
    )
}
