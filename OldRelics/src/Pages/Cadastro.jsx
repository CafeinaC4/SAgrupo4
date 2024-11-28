import React, { useState } from 'react'
import './Cadastro.css'
import Navbar from '../Components/NavBar'
import { Link } from 'react-router-dom'
import axios from 'axios';


function Cadastro() {
   // Declaração para controle de estados do dado digitado no input
   const[funcionario, setFuncionario] = useState({idfuncionario:'', nomefuncionario:'', emailfuncionario:'', senhafuncionario:'', cpffuncionario:'' })

   // Função chamada no clique do botão
   const handleCadastro = async (e) => {
     e.preventDefault()
       try {
         // Utilizando o axios para enviar requisição de post do front para o back
         console.log ('try')
         const response = await axios.post('http://localhost:5432/funcionarios', funcionario)
           if (response.status === 201) {
            console.log ("if")
             setFuncionario(response.data);
             alert('Usuário cadastrado no banco de dados! :D')
           }
       } catch (error) {
           console.error('Erro ao cadastrar usuário! :(', error)
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
            <input className="inputs" placeholder="Email" value={funcionario.emailfuncionario} onChange={(e) => setFuncionario({ ...funcionario, emailfuncionario: e.target.value })} />
            <label className='infoCadastro'>Senha</label>
            <input className="inputs" placeholder="Senha" value={funcionario.senhafuncionario} onChange={(e) => setFuncionario({ ...funcionario, senhafuncionario: e.target.value })} />
            {/* <label className='infoCadastro'>Repita senha</label> */}
            {/* <input className="inputs" placeholder="Repita a senha" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)}/> */}
            <label className='infoCadastro'>Cpf</label>
            <input className="inputs" placeholder="Cpf" value={funcionario.cpffuncionario} onChange={(e) => setFuncionario({ ...funcionario, cpffuncionario: e.target.value })} />
            <input className="inputs" placeholder="Id" value={funcionario.idfuncionario} onChange={(e) => setFuncionario({ ...funcionario, idfuncionario: e.target.value })} required/>
            <label className='infoCadastro'>Código</label>
            {/* <input className="inputs" placeholder="Codigo de entrada" value={form.codigoAcesso} onChange={(e) => setCodigoAcesso(e.target.value)} /> */}
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

export default Cadastro