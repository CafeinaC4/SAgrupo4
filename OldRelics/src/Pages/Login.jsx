import React from 'react';
import './Login.css';
import Navbar from '../Components/NavBar';
import { Link } from 'react-router-dom'

const Login = () => {
    return (
      <div className='appContainer'>
        <Navbar/>
        <div className='background'>
        <div className="cardContainer">
           
            <label className="logintxt">Login</label>
          <input className="inputs" id='1' placeholder="Email"/>
          <input className="inputs" id='2' placeholder="Senha"/>
          <button className="cadastrar" onClick={Login}>
          Login
          </button>
          <Link to="/" className='linkParaLogin'>Não possui uma conta? Clique aqui!</Link>
        </div>
        </div>
        </div>
    );
};

export default Login;