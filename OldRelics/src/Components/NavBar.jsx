import { Link } from "react-router-dom"
import './NavBar.css'
function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/">Cadastro</Link>
        <Link to="/Home">Home</Link>
    </nav>
  )
}

export default Navbar