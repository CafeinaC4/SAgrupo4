CREATE TABLE funcionarios (
    id SERIAL PRIMARY KEY,
    nomefuncionario VARCHAR(100) NOT NULL,
    emailfuncionario VARCHAR(100) UNIQUE NOT NULL,
    senhafuncionario VARCHAR(255) NOT NULL,
    cpffuncionario CHAR(11) UNIQUE NOT NULL
);

CREATE  TABLE itens (
    id_item SERIAL PRIMARY KEY, -- Identificador único para o item
    nomeitem VARCHAR(255) NOT NULL,         -- Nome do item
    idadeitem INT NOT NULL,                 -- Idade do item (em anos, por exemplo)
    dataaquisicaoitem DATE,        -- Data de aquisição do item
    tipoitem VARCHAR(100),         -- Tipo ou categoria do item
    descricaoitem TEXT,                     -- Descrição detalhada do item
    itemestoque BOOLEAN,           -- Indica se o item está em estoque (TRUE ou FALSE)
    datavendaitem DATE,                      -- Data da venda do item (pode ser NULL se não vendido)
	preco DECIMAL(10, 2)
);

INSERT INTO itens (nomeitem, idadeitem, dataaquisicaoitem, tipoitem, descricaoitem, itemestoque, datavendaitem, preco)
VALUES
('Cadeira Gamer', 2, '2022-06-15', 'Móvel', 'Cadeira ergonômica para jogos', TRUE, NULL, 799.90),
('Notebook Dell', 1, '2023-08-10', 'Eletrônico', 'Notebook com 16GB RAM e 512GB SSD', TRUE, NULL, 4500.00),
('Mesa Escritório', 3, '2021-11-20', 'Móvel', 'Mesa de escritório com gavetas', FALSE, '2023-09-12', 499.99),
('Smartphone Samsung', 0, '2024-01-25', 'Eletrônico', 'Celular com câmera de 108MP', TRUE, NULL, 2999.99),
('Ventilador Arno', 5, '2019-03-18', 'Eletrodoméstico', 'Ventilador de 3 velocidades', FALSE, '2022-07-22', 199.90),
('Monitor LG', 1, '2023-09-05', 'Eletrônico', 'Monitor 27" Full HD', TRUE, NULL, 1299.00),
('Livro de Python', 0, '2024-03-01', 'Livro', 'Guia completo para programação em Python', TRUE, NULL, 89.90),
('Geladeira Brastemp', 7, '2017-12-05', 'Eletrodoméstico', 'Geladeira frost-free com 400L', FALSE, '2021-05-15', 3200.00),
('Mouse Logitech', 2, '2022-10-12', 'Acessório', 'Mouse sem fio com DPI ajustável', TRUE, NULL, 150.00),
('Cafeteira Nespresso', 4, '2020-08-30', 'Eletrodoméstico', 'Máquina de café expresso compacta', FALSE, '2023-01-18', 799.90);