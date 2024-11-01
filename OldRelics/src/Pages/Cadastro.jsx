import React from 'react'
import './Cadastro.css'
import { useState } from 'react'
import Navbar from '../Components/NavBar'
import { Link } from 'react-router-dom'

function Cadastro() {
  const [nome, setNome] = useState()  
  const [idade, setIdade] = useState()
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()
  const [cpf, setCpf] = useState()
  const [codigoAcesso, setCodigoAcesso] = useState(false)

  let funcionario = {nome: "", idade: "", email: "", senha: "", cpf: "", idFuncionario: ""}

  
  

  return (
    <div className="appContainer">
      <div className="background">
        <Navbar/>
        <div className="cardContainer">
          <label className="cadastrotxt">Cadastro</label>
          <input className="inputs" id='1' placeholder="Nome"/>
          <input className="inputs" id='2' placeholder="Idade"/>
          <input className="inputs" id='3' placeholder="Email"/>
          <input className="inputs" id='4' placeholder="Senha"/>
          <input className="inputs" id='5' placeholder="Repita a senha"/>
          <input className="inputs" id='6' placeholder="Codigo de entrada"/>
          
          <button className="cadastrar" onClick={Cadastro}>
          Cadastrar
          </button>
          <Link to="/Login" className='linkParaLogin'>Clique aqui se já possui uma conta</Link>
        </div>
      </div>
    </div>
  )
}

export default Cadastro