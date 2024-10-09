import Navbar from "../components/Navbar"
import { useContext, useState } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
function Home() {
    const {usuarioLogado,  bairro, setBairro} = useContext(GlobalContext)
    
    function mudarEndereco(){
      setBairro(prompt("Onde você mora?"))
    }

  return (
    <div>
        <Navbar />
      <h1>Página home do site</h1>
      <p>Olá {usuarioLogado}</p>
      <p>Onde mora: {bairro}</p>

      <button onClick={mudarEndereco}>Mudar Endereço</button>

    </div>
  )
}

export default Home
