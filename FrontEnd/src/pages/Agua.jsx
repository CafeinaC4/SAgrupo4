import React from 'react'
import './Agua.css'

import { GlobalContext } from '../contexts/GlobalContext'
import { useContext } from 'react'

function Agua() {
  return (
    <div className='container'>
      <h1>Relics</h1>
      <p>A Bizarre Collection of Antiques & Curios</p>
      <P>Cadastro {bairro}</P>
      <p>Login {bairro}</p>
    </div>
  )
}

export default Agua
