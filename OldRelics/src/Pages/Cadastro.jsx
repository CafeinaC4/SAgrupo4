import React, { useState, useContext} from 'react'
import './Cadastro.css'
import Navbar from '../Components/NavBar'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalContext'
import axios from 'axios';


function Cadastro() {
  // const {funcionarios, setFuncionarios} = useContext(GlobalContext)
  const [fucionarios, setFuncionarios] = useState([]);
  const [form, setForm] = useState({ nome: '', email: '', senha: '', cpf: '' });
  const [selectedFuncionario, setSelectedFuncionario] = useState(null); // Cliente selecionado para update

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          if (selectedCliente) {
              // Atualizar cliente existente (PUT)
              const response = await axios.put(`http://localhost:3000/clientes/${selectedCliente.id}`, form);
              if (response.status === 200) {
                  fetchClientes(); // Atualiza a lista de clientes após a edição
                  setForm({ nome: '', email: '', senha: '', cpf: ''  }); // Limpa o formulário
                  setSelectedCliente(null); // Reseta o cliente selecionado
              }
          } else {
              // Adicionar novo cliente (POST)
              const response = await axios.post('http://localhost:3000/clientes', form);
              if (response.status === 201) {
                  fetchClientes(); // Atualiza a lista de clientes após a adição
                  setForm({ nome: '', email: '', senha: '', cpf: '' }); // Limpa o formulário
              }
          }
      } catch (error) {
          console.error('Erro ao adicionar/atualizar cliente:', error);
      }
  };

 

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
            <button className="cadastrar" onClick={cadastrar}>
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