import React, { useState, useContext} from 'react'
import './Cadastro.css'
import Navbar from '../Components/NavBar'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalContext'
import axios from 'axios';


function Cadastro() {
  // const {funcionarios, setFuncionarios} = useContext(GlobalContext)
  const [fucionarios, setFuncionarios] = useState([]);
  const [form, setForm] = useState({ nomeFuncionario: '', idadeFuncionario: '', emailFuncionario: '', senhaFuncionario: '', cpfFuncionario: '' });
  const [selectedFuncionario, setSelectedFuncionario] = useState(null); // Cliente selecionado para update

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          if (selectedFuncionario) {
              // Atualizar cliente existente (PUT)
              const response = await axios.put(`http://localhost:3000/Funcionarios/${selectedFuncionario.id}`, form);
              if (response.status === 200) {
                  fetchFuncionarios(); // Atualiza a lista de clientes após a edição
                  setForm({ nomeFuncionario: '', idadeFuncionario: '', emailFuncionario: '', senhaFuncionario: '', cpfFuncionario: ''  }); // Limpa o formulário
                  setSelectedFuncionario(null); // Reseta o cliente selecionado
              }
          } else {
              // Adicionar novo cliente (POST)
              const response = await axios.post('http://localhost:3000/Funcionarios', form);
              if (response.status === 201) {
                  fetchFuncionarios(); // Atualiza a lista de clientes após a adição
                  setForm({ nomeFuncionario: '', idadeFuncionario: '', emailFuncionario: '', senhaFuncionario: '', cpfFuncionario: '' }); // Limpa o formulário
              }
          }
      } catch (error) {
          console.error('Erro ao adicionar/atualizar funcionario:', error);
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
            <input className="inputs" placeholder="Nome" value={form.nome} onChange={(e) => setForm({ ...form, nomeFuncionario: e.target.value })} required/>
            <label className='infoCadastro'>Idade</label>
            <input className="inputs" placeholder="Idade" value={form.idade} onChange={(e) => setForm({ ...form, idadeFuncionario: e.target.value })} />
            <label className='infoCadastro'>Email</label>
            <input className="inputs" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, emailFuncionario: e.target.value })} />
            <label className='infoCadastro'>Senha</label>
            <input className="inputs" placeholder="Senha" value={form.senha} onChange={(e) => setForm({ ...form, senhaFuncionario: e.target.value })} />
            {/* <label className='infoCadastro'>Repita senha</label> */}
            {/* <input className="inputs" placeholder="Repita a senha" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)}/> */}
            <label className='infoCadastro'>Cpf</label>
            <input className="inputs" placeholder="Cpf" value={form.cpf} onChange={(e) => setForm({ ...form, cpfFuncionario: e.target.value })} />
            <label className='infoCadastro'>Código</label>
            <input className="inputs" placeholder="Codigo de entrada" value={form.codigoAcesso} onChange={(e) => setCodigoAcesso(e.target.value)} />
          </div>
          <div className="botaoCadastro">
            <button className="bcadastrar" onClick={handleSubmit}>
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