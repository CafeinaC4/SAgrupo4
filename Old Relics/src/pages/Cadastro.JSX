import React, { useState } from 'react'
import './Cadastro.css'

function Cadastro() {

    // const [nome, setNome] = useState('')
    // const [idade, setIdade] = useState('')
    // const [email, setEmail] = useState('')
    // const [senha, setSenha] = useState('')
    // const [numeroCelular, setNumero] = useState('')
    // const [cpf, setCpf] = useState('')
    // const [confirmarAcesso, setConfirmarAcesso] = useState('')
    // const [acessoPermitido, setAcessoPermitido] = useState(false)

    // let cadastroFuncionario = {nome: "", idFuncionario: "",email: "", senha: "",cpf: ""}

    // function confirmarCadastro(){

    // }
    
    // // if(){
    // //     setAcessoPermitido(true)
    // // }
    // if(acessoPermitido == true){
    // }

    // function enviarEmailCredenciais(){



    // }
  return (
    <div>
        <div class="form_back">
            <div class="form_details">Cadastre-se</div>
            <input placeholder="Firstname" class="input" type="text"/>
            <input placeholder="Username" class="input" type="text"/>
            <input placeholder="Password" class="input" type="text"/>
            <input placeholder="Confirm Password" class="input" type="text"/>
            <button class="btn">Cadastrar</button>
            <span class="switch">Já está cadastrado?
                <label class="signup_tog" for="signup_toggle">
                    Cadastre-se
                </label>
            </span>
        </div>
</div>
    
  )
}

export default Cadastro
