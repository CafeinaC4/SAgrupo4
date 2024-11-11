import React from 'react'
import './Cadastro.css'
import { useState } from 'react'
import Navbar from '../Components/NavBar'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalContext'
import { useContext } from 'react'

function Cadastro() {
  const {funcionarios, setFuncionarios} = useContext(GlobalContext)
  const [nome, setNome] = useState()  
  const [idade, setIdade] = useState()
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()
  const [confirmarSenha, setConfirmarSenha] = useState()
  const [cpf, setCpf] = useState()
  const [codigoAcesso, setCodigoAcesso] = useState(false)

  const verificarCodigo = () =>{
    if(codigoAcesso == "123456789"){
      return true
    }
    return false
  }

  const cadastrar = () => {
    if(!verificarCodigo()){
      alert('Código de entrada inválido, por favor verifique')
      return
    }
    if(senha != confirmarSenha){
      alert('As senhas não são as mesmas, por favor confira se está correta')
      return
    }

    let funcionario = {
    nome : nome,
    idade : idade,
    email : email,
    senha : senha,
    cpf : cpf,
    idFuncionario : Date.now()
    }
    setFuncionarios([...funcionarios, funcionario])
  }

 

  return (
    <div className="appContainer">
        <Navbar/>
      <div className="background">
        <div className="cardContainer">
          <label className="cadastrotxt">Cadastro</label>
          <label className='info'>Nome</label>
          <input className="inputs" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
          <label className='info'>Idade</label>
          <input className="inputs" placeholder="Idade" value={idade} onChange={(e) => setIdade(e.target.value)} />
          <label className='info'>Email</label>
          <input className="inputs" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label className='info'>Senha</label>
          <input className="inputs" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
          <label className='info'>Repita senha</label>
          <input className="inputs" placeholder="Repita a senha" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)}/>
          <label className='info'>Cpf</label>
          <input className="inputs" placeholder="Cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} />
          <label className='info'>Código</label>
          <input className="inputs" placeholder="Codigo de entrada" value={codigoAcesso} onChange={(e) => setCodigoAcesso(e.target.value)} />
          
          <button className="cadastrar" onClick={cadastrar}>
          Cadastrar
          </button>
          <Link to="/Login" className='linkParaLogin'>Clique aqui se já possui uma conta</Link>
        </div>
      </div>
    </div>
  )
}

export default Cadastro