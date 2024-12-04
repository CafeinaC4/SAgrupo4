import React, { useState } from 'react'
import './Cadastro.css'
import Navbar from '../Components/NavBar'
import { Link } from 'react-router-dom'
import axios from 'axios';


function Cadastro() {
   const[funcionario, setFuncionario] = useState({idfuncionario:'', nomefuncionario:'', emailfuncionario:'', senhafuncionario:'', cpffuncionario:'' })
   const [confirmarSenha, setConfirmarSenha] = useState('')
   const [showPassword, setShowPassword] = useState(false)

   const handleCadastro = async (e) => {
    if (confirmarSenha != funcionario.senhafuncionario){
       alert('Senhas não conferem!')
       return
    }else if (funcionario.senhafuncionario <= 5) {
      alert('Senhas não possui tamanho o suficiente!')
      return
    }else{
      e.preventDefault()
       try {
         const response = await axios.post('http://localhost:3000/funcionarios', funcionario)
           if (response.status === 201) {
             setFuncionario(response.data);
             alert('Usuário cadastrado no banco de dados! :D')
           }
       } catch (error) {
           console.error('Erro ao cadastrar usuário! :(', error)
       }
       console.log (funcionario)
    }
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
            <input className="inputs" placeholder="Nome" value={funcionario.nomefuncionario} onChange={(e) => setFuncionario({ ...funcionario, nomefuncionario: e.target.value })} required/>

            <label className='infoCadastro'>Email</label>
            <input className="inputs" placeholder="Email" value={funcionario.emailfuncionario} onChange={(e) => setFuncionario({ ...funcionario, emailfuncionario: e.target.value })}/>

            <label className='infoCadastro'>Senha</label>
            <input className="inputs" type={showPassword ? 'text' : 'password'} placeholder="Senha" value={funcionario.senhafuncionario} onChange={(e) => setFuncionario({ ...funcionario, senhafuncionario: e.target.value })} />

            <label className='infoCadastro'>Repita senha</label>
            <input className="inputs" type={showPassword ? 'text' : 'password'} placeholder="Repita a senha" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)}/>

            <label className='infoCadastro'>Cpf</label>
            <input className="inputs" maxLength={14} placeholder="Cpf" value={funcionario.cpffuncionario} onChange={(e) => setFuncionario({ ...funcionario, cpffuncionario: e.target.value })}/>

            {/* <label className='infoCadastro'>Código</label> */}
            {/* <input className="inputs" placeholder="Codigo de entrada" value={form.codigoAcesso} onChange={(e) => setFuncionario({ ...funcionario, idfuncionario: e.target.value })} required/> */}
          </div>

          <label>Mostrar senha</label>
          <div className="mostrarSenha">
            <input type="checkbox" checked={showPassword} onChange={(e) => setShowPassword(e.target.checked)}/>
          </div>

          <div className="botaoCadastro">
            <button className="bcadastrar" onClick={handleCadastro}>
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

export default Cadastro;