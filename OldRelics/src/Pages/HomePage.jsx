import React from 'react';
import './HomePage.css';
import Navbar from '../Components/NavBar';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useUser } from '../Context/UserContext';  // Importe o useUser para acessar o contexto

function App() {
  
  // const [itens, setItens] = useState([{nomeitem: '', idadeitem: '', dataaquisicaoitem: '', tipoitem: '', descricaoitem: '', itemestoque: '', datavendaitem: ''}])
  const [iditemEditing, setiditemEditing] = useState(false);
  const { user, setUser } = useUser();  
  const [ item, setItem ] = useState([]); 
  // const [funcionarios, setFuncionarios] = useState([]);
  const [filteredItem, setFilteredItem] = useState([]);
  const [filter, setFilter] = useState("");  // Estado para o filtro do nome do item

  const formatDate = (value) => {
    if(!value) return;
    const date = new Date(value);
    
    const day = String(date.getUTCDate()).padStart(2, '0'); 
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = date.getUTCFullYear();

    // Retorne a data no formato desejado
    return `${year}-${month}-${day}`;
  };

  const ProductDetails = ({ itm, iditemEditing, setiditemEditing }) => {
    itm.idadeitem = formatDate(itm.idadeitem)
    const formatPrice = (value) => {
      // Verifica se o valor é um número válido
      const numericValue = parseFloat(value);
      
      // Se não for um número válido, retorna '0,00'
      if (isNaN(numericValue)) {
        return '0,00';
      }
    
      // Formata o número com duas casas decimais, separador de milhar e vírgula como separador decimal
      return numericValue
        .toFixed(2) // duas casas decimais
        .replace('.', ',') // troca o separador
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // pontos como separador de milhar
    };

    // Estados locais
    const [nome, setNome] = useState(itm.nomeitem);
    const [preco, setPreco] = useState(itm.precoitem);
    const [idade, setIdade] = useState(itm.idadeitem);
  
    // Atualiza os valores ao mudar o estado de 'iditemEditing' para um novo item
    useEffect(() => {
      setNome(itm.nomeitem);
      setPreco(itm.precoitem);
      setIdade(itm.idadeitem);
    }, [itm]);
  
    // Funções para tratar as mudanças nos inputs
    const handleNomeChange = (e) => setNome(e.target.value);
    const handlePrecoChange = (e) => setPreco(e.target.value);
    const handleIdadeChange = (e) => setIdade(e.target.value);
  
    // Função para salvar as mudanças
    const saveChanges = async () => {
      // Garantir que 'itm' esteja definido antes de tentar acessar suas propriedades
      if (!itm) {
        console.error("Item não está definido.");
        return;
      }
  
      const updatedItem = {
        ...itm,
        nomeitem: nome,
        precoitem: preco,
        idadeitem: idade,
      };
  
      try {
        let response;
        if (itm.iditem) {
          // Se o item já existe, envia a atualização com PUT
          response = await axios.put(`http://localhost:3000/itens/${itm.iditem}`, updatedItem);
        } else {
          // Se o item não tem id, é um novo item, então envia com POST
          response = await axios.post('http://localhost:3000/itens', updatedItem);
        }
  
        // Atualiza o estado global ou local após o sucesso da requisição
        setItem((prevItens) => {
          if (itm.iditem) {
            // Se for um item existente, apenas atualize o item na lista
            setItem(prevItens.map((item) =>
              // item.iditem === itm.iditem ? { ...item, nomeitem: nome, idadeitem: idade, tipoitem: tipo, descricaoitem: descicao, itememestoque: emestoque, datavendaitem: datavenda, dataaquisicaoiem: dataaquisicao, precoitem: preco} : item
              item.iditem === itm.iditem ? { ...item, nomeitem: nome, idadeitem: idade, precoitem: preco} : item
            ));
            
            setFilteredItem(prevItens.map((item) =>
              // item.iditem === itm.iditem ? { ...item, nomeitem: nome, idadeitem: idade, tipoitem: tipo, descricaoitem: descicao, itememestoque: emestoque, datavendaitem: datavenda, dataaquisicaoiem: dataaquisicao, precoitem: preco} : item
              item.iditem === itm.iditem ? { ...item, nomeitem: nome, idadeitem: idade, precoitem: preco} : item
            ));

            return prevItens.map((item) =>
              item.iditem === itm.iditem ? { ...item, nomeitem: nome, idadeitem: idade, precoitem: preco} : item
            );
          } else {
            // Se for um novo item, adicione-o à lista
            setFilteredItem([response.data, ...prevItens.slice(1)]);
            setItem([response.data, ...prevItens.slice(1)]);

            return [response.data, ...prevItens.slice(1)];
          }
        });
  
        // Desativa o modo de edição após salvar
        setiditemEditing(false);
      } catch (error) {
        console.error('Error saving item:', error);
      }
    };
  
    return (
      <div className='Itens1'>
        <div className="product-card">
          <div className='product-image'></div>
          <div className="product-details">
            {iditemEditing === itm.iditem || !itm.iditem ? (
              <div>
                <input
                  className="inputs"
                  placeholder="Nome"
                  value={nome ?? ''} // Usa o estado local para 'nome'
                  onChange={handleNomeChange} // Atualiza o estado ao digitar
                  required
                />
                <input
                  className="inputs"
                  placeholder="Idade"
                  value={idade ?? ''} 
                  onChange={handleIdadeChange} 
                  required
                />
                 <input
                  className="inputs"
                  placeholder="Preço"
                  value={preco ?? ''}
                  onChange={handlePrecoChange}
                  required
                />
                <p className="product-id">ID: {itm.iditem}</p>
                <button className="add-to-cart-btn" onClick={() => saveChanges()}>Salvar</button> {/* Botão para salvar a edição */}
                <button className="add-to-cart-btn" onClick={() => cancel()}>Cancelar</button> {/* Botão para ativar o modo de edição */}
              </div>
            ) : (
              <div>
                <p>{itm.nomeitem}</p>
                <p>Produzido em:</p>
                <p>{itm.idadeitem}</p>
                <p>R${itm.precoitem}</p>
                <p className="product-id">ID: {itm.iditem}</p>
                <button className="add-to-cart-btn" onClick={() => setiditemEditing(itm.iditem)}>Editar</button> {/* Botão para ativar o modo de edição */}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const removeFirstItem = () => {
    setItem(item.slice(1)); // Remove o primeiro item da lista
    setFilteredItem(filteredItem.slice(1));
  };

  const addItem = () => {
    const newItem = {
      id: null,
      nomeitem: 'Novo Item', // Nome do item (você pode personalizar isso)
      preco: 0, // Preço do item (ou qualquer outro dado que você queira)+
      idadeitem: 0
    };
    setiditemEditing(null)
    setItem([newItem, ...item]);
    setFilteredItem([newItem, ...filteredItem]);
  };

  const cancel = () => {
    if(!iditemEditing) {
      removeFirstItem();
    }
    setiditemEditing(false);
  };

  const fetchItens = async () => {
    try {
      const response = await axios.get('http://localhost:3000/itens')
      setItem(response.data);
      setFilteredItem(response.data);
    } catch (error) {
      console.error('Error fetching itens:', error)
    }
  }

  useEffect(() => {
    fetchItens()
  }, [])

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value);

    // Filtrar os itens com base no nome (considerando que o nomeitem é case-insensitive)
    const filteredItem = item.filter(itm => itm.nomeitem.toLowerCase().includes(value.toLowerCase()));
    setFilteredItem(filteredItem);
  };

  return (
    <div className="appContainerHome">
      <Navbar/>
        <div className='background'>
          <div className="title">
            <div className="titlep">
              <h1>A Bizarre Collection of Antiques & Curios</h1>
              <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
              {!user && (
              <div className="cadastro">
                <Link to="/" className='buttons'>CADASTRO</Link>
                <Link to="/Login" className='buttons'>LOGIN</Link>
              </div>
              )}
            </div>
          </div>
          <div className='Nothing'></div>
        </div>
      {user && (<div className='ItensPage'>
        <div className='Filter'>
          <button type="button" className="button" onClick={addItem}>
            <span className="button__text">Adicionar</span>
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
          <div className="search">
            <div className="search-box">
              <div className="search-field">
                <input 
                placeholder="Procurar Itens" 
                className="input" 
                type="text" 
                onChange={handleFilterChange}
                value={filter}
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
          <div className="select">
            <div
              className="selected"
              data-default="All"
              data-one="option-1"
              data-two="option-2"
              data-three="option-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                className="arrow"
              >
                <path
                  d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                ></path>
              </svg>
            </div>
            <div className="options">
              <div title="all">
                <input id="all" name="option" type="radio" checked={filteredItem} onChange={handleFilterChange}></input>
                <label className="option" htmlFor="all" data-txt="Categorias" data-text="Todos"></label>
              </div>
              <div title="option-1">
                <input id="option-1" name="option" type="radio" />
                <label className="option" htmlFor="option-1" data-txt="Pulseiras"></label>
              </div>
              <div title="option-2">
                <input id="option-2" name="option" type="radio" />
                <label className="option" htmlFor="option-2" data-txt="Vasos"></label>
              </div>
              <div title="option-3">
                <input id="option-3" name="option" type="radio" />
                <label className="option" htmlFor="option-3" data-txt="Bonecos"></label>
              </div>
            </div>
          </div>
        </div>

        <div className='Colunas'>
          <div className='Coluna1'>
          {filteredItem && filteredItem.length > 0 ? (
            filteredItem.map((itm) => (
              <ProductDetails
                key={itm.iditem}
                itm={itm}
                iditemEditing={iditemEditing}
                setiditemEditing={setiditemEditing}
                setItem={setItem}
              />
            ))
          ) : (
            <p className="mensagem">Nenhum item disponível.</p>
          )}
            
{/* 
            <div className='Itens2'>
              <div className="product-card">
                <div
                className="product-image"
                style={{
                  backgroundImage: "url('your-image-path.jpg')",
                }}></div>
                <div className="product-details">
                  <p className="product-name">Dark Mirror</p>
                  <p className="product-price">$25.99</p>
                  <p className="product-id">ID: 23432252</p>
                  <button className="add-to-cart-btn">Editar</button>
                </div>
              </div>
            </div> */}
          </div>
{/* 
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
                }}></div>
                <div className="product-details">
                  <p className="product-name">Long Chair</p>
                  <p className="product-price">$25.99</p>
                  <p className="product-id">ID: 23432252</p>
                  <button className="add-to-cart-btn">Editar</button>
                </div>
              </div>
            </div>
          </div> */}
          <div className='Pagination'>
      
          </div>
        </div>
      </div>
      )}
    </div>
    );
  }

export default App;