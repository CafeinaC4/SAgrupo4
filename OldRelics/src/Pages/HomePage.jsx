import React from 'react';
import './HomePage.css';
import Navbar from '../Components/NavBar';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useUser } from '../Context/UserContext'; 

function App() {
  
  const [iditemEditing, setiditemEditing] = useState(-1);
  const {user} = useUser();  
  const [items, setItems ] = useState([]); 
  const [filteredItems, setFilteredItems] = useState([]);
  const [order, setOrder] = useState("");
  const [filter, setFilter] = useState("");

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

    // Estados locais
    const [imagem, setImagem] = useState(itm.imagemitem)
    const [nome, setNome] = useState(itm.nomeitem);
    const [preco, setPreco] = useState(itm.precoitem);
    const [idade, setIdade] = useState(itm.idadeitem);
  
    // Atualiza os valores ao mudar o estado de 'iditemEditing' para um novo item
    useEffect(() => {
      setImagem(itm.imagemitem);
      setNome(itm.nomeitem);
      setPreco(itm.precoitem);
      setIdade(itm.idadeitem);
    }, [itm]);
  
    // Funções para tratar as mudanças nos inputs
    const handleImagemChange = (e) => setImagem(e.target.value);
    const handleNomeChange = (e) => setNome(e.target.value);
    const handlePrecoChange = (e) => setPreco(e.target.value);
    const handleIdadeChange = (e) => setIdade(e.target.value);
  
    const cancel = () => {
      if(!itm.iditem) {
        removeFirstItem();
      }
  
      setiditemEditing(-1);
    };

    // Função para salvar as mudanças
    const saveChanges = async () => {
      // Garantir que 'itm' esteja definido antes de tentar acessar suas propriedades
      if (!itm) {
        console.error("Item não está definido.");
        return;
      }
  
      const updatedItem = {
        ...itm,
        imagemitem: imagem,
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
        setItems((prevItens) => {
          if (itm.iditem) {
            // Se for um item existente, apenas atualize o item na lista
            setItems(prevItens.map((item) =>
              item.iditem === itm.iditem ? { ...item, imagemitem: imagem, nomeitem: nome, idadeitem: idade, precoitem: preco} : item
            ));
            
            setFilteredItems(filteredItems.map((item) =>
              item.iditem === itm.iditem ? { ...item, imagemitem: imagem, nomeitem: nome, idadeitem: idade, precoitem: preco} : item
            ));

            return prevItens.map((item) =>
              item.iditem === itm.iditem ? { ...item, imagemitem: imagem, nomeitem: nome, idadeitem: idade, precoitem: preco} : item
            );
          } else {
            // Se for um novo item, adicione-o à lista
            setFilteredItems([response.data, ...filteredItems.slice(1)]);
            setItems([response.data, ...prevItens.slice(1)]);

            return [response.data, ...prevItens.slice(1)];
          }
        });
  
        // Desativa o modo de edição após salvar
        setiditemEditing(-1);
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
                className='inputs'
                  placeholder="Imagem"
                  value={imagem?? ''} // Usa o estado local para 'imagem'
                  onChange={handleImagemChange} // Atualiza o estado ao digitar
                  required
                />
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
                <img className='imagemProduto' src={itm.imagemitem} alt={itm.nomeitem}/>
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
    setItems(items.slice(1)); // Remove o primeiro item da lista
    setFilteredItems(filteredItems.slice(1));
  };

  const addItem = () => {
    if(!iditemEditing) return;
    if(filteredItems.length > 0 && !filteredItems[0].iditem) return;

    const newItem = {
      iditem: null,
      imagemitem: '',
      nomeitem: 'Novo Item',
      precoitem: 0,
      idadeitem: 0
    };
    setiditemEditing(null)
    setItems([newItem, ...items]);
    setFilteredItems([newItem, ...filteredItems]);
  };

  

  const fetchItens = async () => {
    try {
      const response = await axios.get('http://localhost:3000/itens')
      setItems(response.data.sort((a, b) => b.precoitem - a.precoitem));
      setFilteredItems(response.data.sort((a, b) => b.precoitem - a.precoitem));
    } catch (error) {
      console.error('Error fetching itens:', error)
    }
  }

  useEffect(() => {
    fetchItens()
  }, [])

  // Filtrar
  const handleFilterChange = (e) => {
    var filterValue =  e.target.value;
    setFilter(filterValue);

    var filteredItems = items.filter(itm => itm.nomeitem.toLowerCase().includes(filterValue.toLowerCase()) || itm.tipoitem.toLowerCase().includes(filterValue.toLowerCase()));

    // Filtrar os itens com base no nome (considerando que o nomeitem é case-insensitive)
    setFilteredItems(filteredItems);
  };

  const handleOrderChange = (e) => {
    const selectedOption = e.target.dataset.value;
    setOrder(selectedOption);
    
    var filteredItemsAux = filteredItems;
    var itemsAux = items;

    // Realizar ordenação
    switch (selectedOption) {
      case "option-1": // Maior preço
        filteredItemsAux = filteredItems.sort((a, b) => b.precoitem - a.precoitem);
        itemsAux = items.sort((a, b) => b.precoitem - a.precoitem);
        break;
      case "option-2": // Menor preço
        filteredItemsAux = filteredItems.sort((a, b) => a.precoitem - b.precoitem);
        itemsAux = items.sort((a, b) => a.precoitem - b.precoitem);
        break;
      case "option-3": // Mais antigo
        filteredItemsAux = filteredItems.sort((a, b) => new Date(a.idadeitem) - new Date(b.idadeitem));
        itemsAux = items.sort((a, b) => new Date(a.idadeitem) - new Date(b.idadeitem));
        break;
      case "option-4": // Mais novo
        filteredItemsAux = filteredItems.sort((a, b) => new Date(b.idadeitem) - new Date(a.idadeitem));
        itemsAux = items.sort((a, b) => new Date(b.idadeitem) - new Date(a.idadeitem));
        break;
      default:
        break; // Caso não seja nenhuma opção, não faz nada
    }

    setFilteredItems(filteredItemsAux);
    setItems(itemsAux);
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
                value={filter}
                onChange={handleFilterChange}
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
            <div className="selected" data-default="Maior preço"
              data-one="Maior preço"
              data-two="Menor preço"
              data-three="Mais antigo"
              data-four="Mais novo"
              >
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className="arrow">
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
              </svg>
            </div>
            <div className="options">
              <div>
                <input id="option-1" name="option" type="radio" checked={order === "option-1" || !order} onChange={handleOrderChange}/>
                <label className="option" data-txt="Maior preço" data-value="option-1" onClick={handleOrderChange} ></label>
              </div>
              <div>
                <input id="option-2" name="option" type="radio" checked={order === "option-2"} onChange={handleOrderChange}/>
                <label className="option" data-txt="Menor preço" data-value="option-2" onClick={handleOrderChange} ></label>
              </div>
              <div>
                <input id="option-3" name="option" type="radio" checked={order === "option-3"} onChange={handleOrderChange}/>
                <label className="option" data-txt="Mais antigo" data-value="option-3" onClick={handleOrderChange} ></label>
              </div>
              
              <div>
                <input id="option-4" name="option" type="radio" checked={order === "option-4"} onChange={handleOrderChange}/>
                <label className="option" data-txt="Mais novo" data-value="option-4" onClick={handleOrderChange} ></label>
              </div>
            </div>
          </div>
        </div>

        <div className='Colunas'>
          <div className='Coluna1'>
          {filteredItems && filteredItems.length > 0 ? (
            filteredItems.map((itm) => (
              <ProductDetails
                key={itm.iditem ?? -1}
                itm={itm}
                iditemEditing={iditemEditing}
                setiditemEditing={setiditemEditing}
                setItems={setItems}
              />
            ))
          ) : (
            <p className="mensagem">Nenhum item disponível.</p>
          )}
          </div>
          <div className='Pagination'>

          </div>
        </div>
      </div>
      )}
    </div>
    );
  }

export default App;