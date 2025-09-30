import { createBrowserRouter } from "react-router";
import IndexPage from "./pages/IndexPage";
import AdminPage from "./pages/AdminPage";
import MainLayout from "./pages/MainLayout";

export const router = createBrowserRouter([
    {
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: IndexPage
            },
            {
                path: 'admin',
                Component: AdminPage
            }
        ]
    }
]);