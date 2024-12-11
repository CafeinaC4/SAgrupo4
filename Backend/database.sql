DROP TABLE IF EXISTS itens;
CREATE TABLE itens
(
    iditem SERIAL PRIMARY KEY,
    nomeitem character varying(255) COLLATE pg_catalog."default" NOT NULL,
    idadeitem date,
    dataaquisicaoitem date,
    tipoitem character varying(100) COLLATE pg_catalog."default",
    descricaoitem text COLLATE pg_catalog."default",
    itemestoque boolean,
    datavendaitem date,
    precoitem numeric(10,2),
    imagemitem text COLLATE pg_catalog."default"
);

DROP TABLE IF EXISTS funcionarios;
CREATE TABLE funcionarios (
    idfuncionario SERIAL PRIMARY KEY,
    nomefuncionario VARCHAR(100) NOT NULL,
    emailfuncionario VARCHAR(100) UNIQUE NOT NULL,
    senhafuncionario VARCHAR(255) NOT NULL,
    cpffuncionario CHAR(11) UNIQUE NOT NULL
);

INSERT INTO itens (
    nomeitem, idadeitem, dataaquisicaoitem, tipoitem, descricaoitem, itemestoque, datavendaitem, precoitem, imagemitem
) VALUES
    ('Vitrola', '1973-01-01', '1970-01-01', 'Eletrônico', 'Vitrola antiga de madeira', true, NULL, 300.00, 'https://i.pinimg.com/236x/4a/51/cb/4a51cb6f1b26b448afc39876cfd6255b.jpg'),
    ('Relógio de Bolso', '1923-01-01', '1923-01-01', 'Acessório', 'Relógio vintage em perfeito estado', true, NULL, 500.00, 'https://i.pinimg.com/236x/ea/39/c8/ea39c80a5ae373ea281c3f13ab29cd13.jpg'),
    ('Medalhão de Coração', '1943-01-01', '1943-01-01', 'Bijuteria', 'Medalhão de coração com gravações', true, NULL, 200.00, 'https://i.pinimg.com/236x/05/a9/5a/05a95aca5fe0d94546ffa775163f34e6.jpg'),
    ('Gravador', '1953-01-01', '1953-01-01', 'Eletrônico', 'Gravador antigo estilo gramofone', true, NULL, 350.00, 'https://br.pinterest.com/pin/54958057948474538/'),
    ('Cristais', '1963-01-01', '1963-01-01', 'Decoração', 'Pequenos cristais decorativos', true, NULL, 150.00, 'https://i.pinimg.com/236x/81/ac/ef/81acef9109747a9d8689edc14f2c824f.jpg'),
    ('Maquina de Escrever', '1933-01-01', '1933-01-01', 'Eletrônico', 'Máquina de escrever vintage', true, NULL, 400.00, 'https://i.pinimg.com/236x/eb/0b/c6/eb0bc667c3843df2a187d1eddf766324.jpg'),
    ('Frasco de Veneno', '1903-01-01', '1903-01-01', 'Decoração', 'Frasco antigo de veneno decorativo', true, NULL, 100.00, 'https://br.pinterest.com/pin/2603712280494133/'),
    ('Pincel e Paleta', '1948-01-01', '1948-01-01', 'Arte', 'Conjunto de pintura usado', true, NULL, 80.00, 'https://i.pinimg.com/236x/c9/7c/ab/c97cab29072f306c57d1891188eef64e.jpg'),
    ('Caderno de Anotações', '1938-01-01', '1938-01-01', 'Papelaria', 'Caderno com anotações antigas', true, NULL, 250.00, 'https://i.pinimg.com/236x/64/6e/74/646e74f8cddfd4d700ffc445944e7dfd.jpg'),
    ('Fones de Ouvido', '2008-01-01', '2008-01-01', 'Eletrônico', 'Fones de ouvido com fio', true, NULL, 20.00, 'https://i.pinimg.com/236x/92/a8/1c/92a81c9631cc047c07d892d3e2709ecd.jpg'),
    ('Taça com Livros', '1978-01-01', '1978-01-01', 'Decoração', 'Conjunto decorativo de taça e livros', true, NULL, 180.00, 'https://i.pinimg.com/236x/9a/07/1e/9a071e271be66505fff9c08fda08ea15.jpg'),
    ('Pacote de Cartas', '1928-01-01', '1928-01-01', 'Papelaria', 'Cartas antigas amarradas', true, NULL, 90.00, 'https://i.pinimg.com/236x/be/97/bd/be97bdffe4ad79219eb07b9a68922b6a.jpg'),
    ('Cadeado de Coração', '1943-01-01', '1943-01-01', 'Bijuteria', 'Cadeado vintage em formato de coração', true, NULL, 150.00, 'https://i.pinimg.com/236x/e6/fe/54/e6fe544f366547654a28a2b4169c0bf0.jpg'),
    ('Frasco de Essência', '1933-01-01', '1933-01-01', 'Decoração', 'Frasco com rótulo "Essence of Dreams"', true, NULL, 100.00, 'https://i.pinimg.com/236x/66/04/39/660439520da7dd0d51071031d7fa904f.jpg'),
    ('Caixa de Fósforos Borboleta', '1953-01-01', '1953-01-01', 'Decoração', 'Caixa de fósforos decorativa com borboletas', true, NULL, 80.00, 'https://i.pinimg.com/236x/73/3d/17/733d17be3d3e109cdc62d5d8d2a53357.jpg'),
    ('Chave Antiga', '1903-01-01', '1903-01-01', 'Acessório', 'Chave decorativa de metal com detalhes vintage', true, NULL, 200.00, 'https://i.pinimg.com/236x/f5/31/79/f531796144ecdb403ccb3c6a42650288.jpg'),
    ('Carta Selada', '1923-01-01', '1923-01-01', 'Papelaria', 'Carta antiga com selo de cera', true, NULL, 50.00, 'https://i.pinimg.com/474x/73/45/70/734570c4a06ee60543999898184ff933.jpg'),
    ('Garrafa com Barco', '1913-01-01', '1913-01-01', 'Decoração', 'Garrafa decorativa com miniatura de barco', true, NULL, 300.00, 'https://i.pinimg.com/736x/eb/81/e7/eb81e72fb233eb109df3d576f0d91b45.jpg'),
    ('Xícara de Café', '1983-01-01', '1983-01-01', 'Decoração', 'Xícara preta com café', true, NULL, 20.00, 'https://i.pinimg.com/236x/80/82/0a/80820a18bd7e5a8c9add80cb2b14c307.jpg'),
    ('Livro de Borboletas', '1938-01-01', '1938-01-01', 'Arte', 'Livro com ilustrações de borboletas', true, NULL, 250.00, 'https://i.pinimg.com/236x/90/7a/7f/907a7ffbf992df0bebd4d8dd723095ac.jpg'),
    ('Guarda-Chuva de Renda', '1928-01-01', '1928-01-01', 'Acessório', 'Guarda-chuva vintage com renda', true, NULL, 180.00, 'https://i.pinimg.com/236x/38/d5/cd/38d5cd2cb4b55e7216cb2ac780b4c9b3.jpg'),
    ('Carimbo com Selo', '1893-01-01', '1893-01-01', 'Decoração', 'Selo antigo com detalhes entalhados', true, NULL, 75.00, 'https://i.pinimg.com/236x/83/32/2a/83322a8370104b98d0f9265df9db2af5.jpg'),
    ('Violino', '1948-01-01', '1948-01-01', 'Instrumento Musical', 'Violino antigo em perfeito estado', true, NULL, 500.00, 'https://i.pinimg.com/236x/08/14/31/081431b1a281c301a3e173b0393e0e94.jpg'),
    ('Telefone Antigo', '1923-01-01', '1923-01-01', 'Eletrônico', 'Telefone vintage de metal', true, NULL, 400.00, 'https://i.pinimg.com/236x/7b/bb/b8/7bbbb8604fa6357761aa5e3ec86d6565.jpg');


SELECT * FROM itens;