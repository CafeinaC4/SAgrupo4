import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';
import { useUser } from '../Context/UserContext';

function Navbar() {
  const [showPopup, setShowPopup] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const { user, setUser } = useUser();
  const [editableUser, setEditableUser] = useState(user || {});
  const navigate = useNavigate();

  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };

  const handleEditToggle = () => {
    setEditableUser(user); // Restaura os dados originais antes de entrar no modo de edição
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableUser({ ...editableUser, [name]: value });
  };

  const handleSaveChanges = () => {
    setUser(editableUser); // Atualiza o contexto global com os novos dados
    setIsEditing(false); // Sai do modo de edição
  };

  const handleCancelEdit = () => {
    setEditableUser(user); // Restaura os dados originais
    setIsEditing(false); // Sai do modo de edição
  };

  const handleLogout = () => {
    setUser(null); // Limpa o contexto global do usuário
    navigate('/Home'); // Redireciona para a página inicial
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
      {showPopup && user && (
        <div className="popup">
          <div className="popup-content">
            <h2>Informações do Usuário</h2>
            {isEditing ? (
              <>
                <label>
                  Nome:
                  <input
                    type="text"
                    name="nomefuncionario"
                    value={editableUser.nomefuncionario}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Email:
                  <input
                    type="email"
                    name="emailfuncionario"
                    value={editableUser.emailfuncionario}
                    onChange={handleInputChange}
                  />
                </label>
              </>
            ) : (
              <>
                <p>Nome: {user?.nomefuncionario}</p>
                <p>Email: {user?.emailfuncionario}</p>
              </>
            )}
            <div className="popup-buttons">
            <button className="logout-btn" onClick={handleLogout}>
                SAIR
              </button>
              {isEditing ? (
                <>
                  <button className="save-btn" onClick={handleSaveChanges}>
                    SALVAR
                  </button>
                  <button className="cancel-btn" onClick={handleCancelEdit}>
                    CANCELAR
                  </button>
                </>
              ) : (
                <button className="edit-btn" onClick={handleEditToggle}>
                  EDITAR
                </button>
              )}
              <button className="close-btn" onClick={handlePopupToggle}>
                FECHAR
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
