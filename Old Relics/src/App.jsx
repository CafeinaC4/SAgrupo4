import { useState } from 'react'
import './App.css'
import Cadastro from './Components/Cadastro.JSX'

function App() {

  const [pagina, setPagina] = useState("")

  return (
    <>
      <nav>
        <button onClick={() => setPagina(<Cadastro/>)}></button>
      </nav>
    </>
  )
}

export default App
