import { Link } from "react-router-dom"
import './NavBar.css'
function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/">Cadastro</Link>
        <Link to="/Home">Home</Link>
        {/* <Link to="/contato"></Link>
        <Link to="/generica"></Link>
        <Link to="/final"></Link> */}
    </nav>
  )
}

export default Navbar