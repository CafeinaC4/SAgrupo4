import React, { useState, useContext} from 'react'
import './Cadastro.css'
import Navbar from '../Components/NavBar'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalContext'


function Cadastro() {
  const {funcionarios, setFuncionarios} = useContext(GlobalContext)
  const [nome, setNome] = useState()  
  const [idade, setIdade] = useState()
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()
  const [confirmarSenha, setConfirmarSenha] = useState()
  const [cpf, setCpf] = useState()
  const [codigoAcesso, setCodigoAcesso] = useState()

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
    <div className="appContainerCadastro">
        <Navbar/>
      <div className="background">
        <div className="cardContainerCadastro">
          <div className="tituloCadastro">
            <label className="cadastrotxt">Cadastro</label>
          </div>
          <div className="inputsCadastro">
            <label className='infoCadastro'>Nome</label>
            <input className="inputs" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
            <label className='infoCadastro'>Idade</label>
            <input className="inputs" placeholder="Idade" value={idade} onChange={(e) => setIdade(e.target.value)} />
            <label className='infoCadastro'>Email</label>
            <input className="inputs" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label className='infoCadastro'>Senha</label>
            <input className="inputs" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
            <label className='infoCadastro'>Repita senha</label>
            <input className="inputs" placeholder="Repita a senha" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)}/>
            <label className='infoCadastro'>Cpf</label>
            <input className="inputs" placeholder="Cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} />
            <label className='infoCadastro'>Código</label>
            <input className="inputs" placeholder="Codigo de entrada" value={codigoAcesso} onChange={(e) => setCodigoAcesso(e.target.value)} />
          </div>
          <div className="botaoCadastro">
            <button className="bcadastrar" onClick={cadastrar}>
              Cadastrar
            </button>
          </div>
          <div className="linkLogin">
            <Link to="/Login" className='linkParaLogin'>Clique aqui se já possui uma conta</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cadastro