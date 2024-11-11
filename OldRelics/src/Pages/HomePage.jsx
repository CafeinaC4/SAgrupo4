import React from 'react';
import './HomePage.css';
import Navbar from '../Components/NavBar';
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="appContainerHome">
      <Navbar/>
      <div className='background'>
      <div className="title">
        <h1>A Bizarre Collection of Antiques & Curios</h1>
        <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
          <button className='buttons' onCLick="/">CADASTRO</button>
          <button className='buttons' onClick="/Login">LOGIN</button>
        </div>
      </div>
    </div>
  );
}

export default App;