import React, { useState, useContext } from 'react';
import './Login.css';
import Navbar from '../Components/NavBar';
import { Link } from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalContext'

const Login = () => {
  const {funcionarios, setFuncionarios} = useContext(GlobalContext)
  const [nome, setNome] = useState('')
  const [senha, setSenha] = useState('')

  const login = () => {
     if (nome != funcionarios  || senha != funcionarios){
       alert('Usuário ou senha inválidos!')
       return
     }else{
       alert('Login efetuado com sucesso!')
     }
  }
    return (
      <div className='appContainer'>
        <Navbar/>
        <div className='background'>
        <div className="cardContainer">
            <label className="logintxt">Login</label>
              <input className="inputs" placeholder="Email ou nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
              <input className="inputs" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
              <button className="cadastrar" onClick={login}>Login</button>
          <Link to="/" className='linkParaLogin'>Não possui uma conta? Clique aqui!</Link>
        </div>
        </div>
        </div>
    );
};

export default Login;