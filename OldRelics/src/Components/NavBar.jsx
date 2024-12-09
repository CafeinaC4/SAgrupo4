import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';
import { useUser } from '../Context/UserContext';  // Importe o useUser para acessar o contexto

function Navbar() {
  const [showPopup, setShowPopup] = useState(false);
  const { user, setUser } = useUser();  // Use o contexto global para obter o usuário e a função setUser
  const navigate = useNavigate();

  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };

  const handleLogout = () => {
    setUser(null);  // Limpa o estado global de user
    navigate('/Home');  // Redireciona para a página de login
  };

  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/Home">HOME</Link>
        <Link to="/">CADASTRO</Link>
      </div>
      <button className="user-info-btn" onClick={handlePopupToggle}>
        <span className="user-icon"></span>
      </button>
      {showPopup && user && (  // O botão de logout só será exibido quando user não for null
        <div className="popup">
          <div className="popup-content">
            <h2>Informações do Usuário</h2>
            <p>Nome: {user?.nomefuncionario}</p>
            <p>Email: {user?.emailfuncionario}</p>
            <div className="popup-buttons"> {/* Alinha os botões */}
              <button className="close-btn" onClick={handlePopupToggle}>
                FECHAR
              </button>
              <button className="logout-btn" onClick={handleLogout}>
                SAIR
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
