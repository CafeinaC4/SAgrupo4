import React, { useState } from 'react';
import './Cadastro.css';

function CadastroFuncionario() {
  // Declarando os estados para armazenar os dados do formulário
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [numeroCelular, setNumero] = useState('');
  const [cpf, setCpf] = useState('');
  const [confirmarAcesso, setConfirmarAcesso] = useState('');
  const [acessoPermitido, setAcessoPermitido] = useState(false);

  // Objeto que armazenará os dados para cadastro
  let cadastroFuncionario = {
    nome: nome,
    idade: idade,
    email: email,
    senha: senha,
    numeroCelular: numeroCelular,
    cpf: cpf
  };

  // Função para verificar se o acesso foi permitido
  function confirmarCadastro() {
    if (confirmarAcesso === senha) {
      setAcessoPermitido(true);
      alert('Acesso confirmado!');
    } else {
      alert('Senha incorreta!');
    }
  }

  // Função para simular o envio de um e-mail com as credenciais
  function enviarEmailCredenciais() {
    // Simulação de envio de email
    alert(`Email enviado para ${email} com as credenciais do funcionário.`);
  }

  // Função de envio do formulário
  function enviarFormulario() {
    if (acessoPermitido) {
      alert('Cadastro realizado com sucesso!');
      enviarEmailCredenciais();
    } else {
      alert('Por favor, confirme o acesso.');
    }
  }

  return (
    <div className='all-container'>
    <div className="container">
      <input type="checkbox" id="signup_toggle" />
      <form className="form">
        <div className="form_front">
          <div className="form_details">Cadastro de Funcionário</div>
          <input
            placeholder="Nome"
            className="input"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            placeholder="Idade"
            className="input"
            type="number"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />
          <input
            placeholder="Email"
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Senha"
            className="input"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <input
            placeholder="Confirmar Senha"
            className="input"
            type="password"
            value={confirmarAcesso}
            onChange={(e) => setConfirmarAcesso(e.target.value)}
          />
          <button className="btn" onClick={confirmarCadastro}>
            Confirmar Acesso
          </button>
        </div>
        <div className="form_back">
          <div className="form_details">Dados Adicionais</div>
          <input
            placeholder="Número Celular"
            className="input"
            type="tel"
            value={numeroCelular}
            onChange={(e) => setNumero(e.target.value)}
          />
          <input
            placeholder="CPF"
            className="input"
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <button className="btn" onClick={enviarFormulario}>
            Enviar Formulário
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default CadastroFuncionario;