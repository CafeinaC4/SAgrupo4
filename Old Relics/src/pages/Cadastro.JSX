// -- create
// CREATE TABLE CLIENT (
//   cliId INTEGER PRIMARY KEY,
//   name TEXT NOT NULL,
//   email TEXT NOT NULL
// );

// CREATE TABLE CLIENTORDER(
//   ordId INTEGER PRIMARY KEY,
//   cliId INTEGER REFERENCES CLIENT (cliId),
//   dtOrd DATE NOT NULL
// );

// -- insert
// INSERT INTO CLIENT VALUES (0001, 'Clark', 'abcd@email.com');
// INSERT INTO CLIENT VALUES (0002, 'Robert', '1234@email.com');
// INSERT INTO CLIENT VALUES (0003, 'Liam', 'jfk1@email.com');
// INSERT INTO CLIENT VALUES (0004, 'Amanda', 'ytbr@email.com');

// INSERT INTO CLIENTORDER VALUES (0001, 0002, '10/12/2024');
// INSERT INTO CLIENTORDER VALUES (0002, 0004, '07/21/2024');
// INSERT INTO CLIENTORDER VALUES (0003, 0001, '11/03/2024');
// INSERT INTO CLIENTORDER VALUES (0004, 0003, '12/30/2024');

// -- fetch 
// SELECT * FROM CLIENT;
// SELECT * FROM CLIENTORDER;
// SELECT * FROM CLIENTORDER WHERE ordId = 0002;
//
//
//
// ---------------------------------------------------------------------

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

    let cadastroFuncionario = {nome: "", idFuncionario: "",email: "", senha: "",cpf: ""}

    function confirmarCadastro(){

    }
    
    // if(){
    //     setAcessoPermitido(true)
    // }
    if(acessoPermitido == true){
    }

    function enviarEmailCredenciais(){



    }
  return (
    <div>
        <div className="form-container">
            <div className="card-container">
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
    </div>
  )
}

export default Cadastro
