import { createBrowserRouter } from "react-router-dom"
import Cadastro from "../Pages/Cadastro"
import Login from "../Pages/Login"

const Router = createBrowserRouter([
    {path: "/", element: <Cadastro/>},
    {path: "/Login", element: <Login/>}
])

export default Router