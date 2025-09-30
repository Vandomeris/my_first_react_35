import { NavLink, Outlet } from "react-router";

export default function MainLayout() {
    return (
        <div>
            <header className="flex justify-between">
                <div className="">LOGO</div>

                <nav>
                    <NavLink to="/">Главная</NavLink>
                    <NavLink to="/admin">Админ-панель</NavLink>
                </nav>
            </header>

            <main><Outlet /></main>

            <footer>Подвал. Все права защищены</footer>
        </div>
    )
}
