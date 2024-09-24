import React, { useState } from 'react'

function Cadastro() {

    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [numeroCelular, setNumero] = useState('')
    const [cpf, setCpf] = useState('')
    const [confirmarAcesso, setConfirmarAcesso] = useState('')
    const [acessoPermitido, setAcessoPermitido] = useState(false)
    const chaveAcesso = VXolp054ihsW3u

    let cadastroFuncionario = {nome: "",idade: "",email: "", senha: "", numeroCelular: "", cpf: ""}

    function confirmarCadastro(){

    }
    
    // if(){
    //     setAcessoPermitido(true)
    // }
    if(acessoPermitido == true){
    }

  return (
    <div>
        <div className="form-container">
            <div className="input-container">
                <input value={nome}></input>
            </div>
            <div className="input-container">
                <input value={idade}></input>
            </div>
            <div className="input-container">
                <input value={email}></input>
            </div>
            <div className="input-container">
                <input value={numeroCelular}></input>
            </div>
            <div className="input-container">
                <input value={senha}></input>
            </div>
            <div className="input-container">
                <input value={confirmarSenha}></input>
            </div>
            <div className="input-container">
                <input value={cpf}></input>
            </div>
            <div className="input-container">
                <input value={confirmarAcesso}></input>
            </div>
            <div className="input-container">
                <button value={confirmarCadastro}>Confirmar Cadastro</button>
            </div>
        </div>
    </div>
  )
}

export default Cadastro
