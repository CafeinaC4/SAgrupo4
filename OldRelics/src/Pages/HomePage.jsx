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
          <Link to="/" className='buttons'>CADASTRO</Link>
          <Link to="/Login" className='buttons'>LOGIN</Link>
        </div>
      </div>
      <div className='Nothing'>

      </div>
        <div className='ItensPage'>
          <div className='Filter'>
          <div className="search">
  <div className="search-box">
    <div className="search-field">
      <input 
        placeholder="" 
        className="input" 
        type="text" 
      />
      <div className="search-box-icon">
        <button className="btn-icon-content">
          <i className="search-icon">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              version="1.1" 
              viewBox="0 0 512 512"
            >
              <path 
                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" 
                fill="#fff"
              />
            </svg>
          </i>
        </button>
      </div>
    </div>
  </div>
</div>
<button type="button" className="button">
  <span className="button__text">Add Item</span>
  <span className="button__icon">
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      strokeWidth="2" 
      strokeLinejoin="round" 
      strokeLinecap="round" 
      stroke="currentColor" 
      fill="none" 
      className="svg"
    >
      <line y2="19" y1="5" x2="12" x1="12"></line>
      <line y2="12" y1="12" x2="19" x1="5"></line>
    </svg>
  </span>
</button>

          </div>
      <div className='Colunas'>
        <div className='Coluna1'>
          <div className='Itens1'>
          <div className="product-card">
      <div
        className="product-image"
        style={{
          backgroundImage: "url('your-image-path.jpg')",
        }}
      ></div>
      <div className="product-details">
        <p className="product-name">Poison Heart</p>
        <p className="product-price">$29.99</p>
        <p className="product-id">ID: 23432252</p>
        <button className="add-to-cart-btn">Editar</button>
      </div>
    </div>

          </div>
          <div className='Itens2'>
          <div className="product-card">
      <div
        className="product-image"
        style={{
          backgroundImage: "url('your-image-path.jpg')",
        }}
      ></div>
      <div className="product-details">
        <p className="product-name">Dark Mirror</p>
        <p className="product-price">$25.99</p>
        <p className="product-id">ID: 23432252</p>
        <button className="add-to-cart-btn">Editar</button>
      </div>
    </div>

          </div>
        </div>
        <div className='Coluna2'>
          <div className='Itens3'>
          <div className="product-card">
      <div
        className="product-image"
        style={{
          backgroundImage: "url('your-image-path.jpg')",
        }}
      ></div>
      <div className="product-details">
        <p className="product-name">Ink</p>
        <p className="product-price">$25.99</p>
        <p className="product-id">ID: 23432252</p>
        <button className="add-to-cart-btn">Editar</button>
      </div>
    </div>

          </div>
          <div className='Itens4'>
          <div className="product-card">
      <div
        className="product-image"
        style={{
          backgroundImage: "url('your-image-path.jpg')",
        }}
      ></div>
      <div className="product-details">
        <p className="product-name">Long Chair</p>
        <p className="product-price">$25.99</p>
        <p className="product-id">ID: 23432252</p>
        <button className="add-to-cart-btn">Editar</button>
      </div>
    </div>

        </div>
      </div>
      <div className='Pagination'>

      </div>
        </div>
      </div>
    </div>
  );
}

export default App;