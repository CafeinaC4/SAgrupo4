DROP TABLE IF EXISTS itens;

CREATE TABLE IF NOT EXISTS itens
(
    iditem SERIAL PRIMARY KEY,
    nomeitem character varying(255) COLLATE pg_catalog."default" NOT NULL,
    idadeitem date,
    dataaquisicaoitem date,
    tipoitem character varying(100) COLLATE pg_catalog."default",
    descricaoitem text COLLATE pg_catalog."default",
    itemestoque boolean,
    datavendaitem date,
    precoitem numeric(10,2)
);

DROP TABLE IF EXISTS funcionarios;
CREATE TABLE funcionarios (
    id SERIAL PRIMARY KEY,
    nomefuncionario VARCHAR(100) NOT NULL,
    emailfuncionario VARCHAR(100) UNIQUE NOT NULL,
    senhafuncionario VARCHAR(255) NOT NULL,
    cpffuncionario CHAR(11) UNIQUE NOT NULL
);


INSERT INTO itens (nomeitem, idadeitem, dataaquisicaoitem, tipoitem, descricaoitem, itemestoque, datavendaitem, precoitem)
VALUES
('Cadeira Gamer', '2021-06-15', '2022-06-15', 'Móvel', 'Cadeira ergonômica para jogos', TRUE, NULL, 799.90),
('Notebook Dell', '2022-08-10', '2023-08-10', 'Eletrônico', 'Notebook com 16GB RAM e 512GB SSD', TRUE, NULL, 4500.00),
('Mesa Escritório', '2018-11-20', '2021-11-20', 'Móvel', 'Mesa de escritório com gavetas', FALSE, '2023-09-12', 499.99),
('Smartphone Samsung', '2024-01-25', '2024-01-25', 'Eletrônico', 'Celular com câmera de 108MP', TRUE, NULL, 2999.99),
('Ventilador Arno', '2014-03-18', '2019-03-18', 'Eletrodoméstico', 'Ventilador de 3 velocidades', FALSE, '2022-07-22', 199.90),
('Monitor LG', '2022-09-05', '2023-09-05', 'Eletrônico', 'Monitor 27" Full HD', TRUE, NULL, 1299.00),
('Livro de Python', '2024-03-01', '2024-03-01', 'Livro', 'Guia completo para programação em Python', TRUE, NULL, 89.90),
('Geladeira Brastemp', '2010-12-05', '2017-12-05', 'Eletrodoméstico', 'Geladeira frost-free com 400L', FALSE, '2021-05-15', 3200.00),
('Mouse Logitech', '2020-10-12', '2022-10-12', 'Acessório', 'Mouse sem fio com DPI ajustável', TRUE, NULL, 150.00),
('Cafeteira Nespresso', '2016-08-30', '2020-08-30', 'Eletrodoméstico', 'Máquina de café expresso compacta', FALSE, '2023-01-18', 799.90);
