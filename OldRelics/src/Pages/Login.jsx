import React, { useState, useEffect } from 'react' 
import './Login.css'
import axios from 'axios'
import Navbar from '../Components/NavBar';
import { Link, useNavigate } from 'react-router-dom';

//me s
const Login = () => {
  const navigate = useNavigate()
  const [funcionarios, setFuncionarios] = useState([]);
  const [form, setForm] = useState({nomefuncionario: '', senhafuncionario: ''})
  const [showPassword, setShowPassword] = useState(false)

  const fetchFuncionario = async () => {
    try {
      const response = await axios.get('http://localhost:3000/funcionarios')
      setFuncionarios(response.data);
    } catch (error) {
      console.error('Error fetching funcionarios:', error)
    }
  }

  useEffect(() => {
    fetchFuncionario()
  }, [])

  const handleLogin = () => {
    const user = funcionarios.find((funcionario) => funcionario.nomefuncionario === form.nomefuncionario && funcionario.senhafuncionario === form.senhafuncionario)

    if (!user) {
      alert('Usuário ou senha inválidos!')
    return
    } else {
      alert('Login efetuado com sucesso!')
      navigate('/Home')
    }
  }

  return (
      <div className='appContainer'>
        <Navbar/>
        <div className='background'>
          <div className="cardContainer">
              <label className="logintxt">Login</label>
                <input className="inputs" placeholder="Email ou nome" value={form.nomefuncionario} onChange={(e) => setForm( {...form, nomefuncionario: e.target.value} )}></input>

                <input className="inputs" placeholder="Senha" type={showPassword ? 'text' : 'password'} value={form.senhafuncionario} onChange={(e) => setForm( {...form, senhafuncionario: e.target.value})}></input>

                <div className="mostrarSenha">
            <input type="checkbox" checked={showPassword} onChange={(e) => setShowPassword(e.target.checked)}/>
            <label>Mostrar senha</label>
          </div>

                <button className="cadastrar" onClick={handleLogin}>Login</button>
            <Link to="/" className='linkParaLogin'>Não possui uma conta? Clique aqui!</Link>
          </div>
        </div>
      </div>
  );
};

export default Login;