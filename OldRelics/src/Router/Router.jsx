import { createBrowserRouter } from "react-router-dom"
import Cadastro from "../Pages/Cadastro"
import Login from "../Pages/Login"
import HomePage from "../Pages/HomePage"

const Router = createBrowserRouter([
    {path: "/", element: <Cadastro/>},
    {path: "/Login", element: <Login/>},
    {path: "/Home", element: <HomePage/>}
])

export default Router