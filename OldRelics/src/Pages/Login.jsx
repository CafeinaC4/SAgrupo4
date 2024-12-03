import React, { useState, useEffect } from 'react';
import './Login.css';
import Navbar from '../Components/NavBar';
import { Link } from 'react-router-dom'
import axios from 'axios' 

// API para login

const Login = () => {
  const [funcionarios, setFuncionario] = useState([]);
  const [form, setForm] = useState({nomefuncionario: '', senhafuncionario: ''});

  const fetchFuncionario = async () => {
    const response = await fetch('<http://localhost:3000/clientes>');
    const data = await response.json();
    setFuncionario(data);
};

  useEffect(() => {
    fetchFuncionario();
  }, []);

  const handleLogin = () => {

     if (form.nomefuncionario != funcionarios  || form.senhafuncionario != funcionarios){
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
              <input className="inputs" placeholder="Email ou nome" value={form.nomefuncionario} onChange={(e) => setForm( {...form, nomefuncionario: e.target.value} )}/>

              <input className="inputs" placeholder="Senha" value={form.senhafuncionario} onChange={(e) => setForm( {...form, senhafuncionario: e.target.value} )}/>

              <button className="cadastrar" onClick={handleLogin}>Login</button>

          <Link to="/" className='linkParaLogin'>Não possui uma conta? Clique aqui!</Link>
        </div>
        </div>
        </div>
    );
};

export default Login;