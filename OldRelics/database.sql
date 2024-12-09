CREATE TABLE funcionarios (
    id SERIAL PRIMARY KEY,
    nomefuncionario VARCHAR(100) NOT NULL,
    emailfuncionario VARCHAR(100) UNIQUE NOT NULL,
    senhafuncionario VARCHAR(255) NOT NULL,
    cpffuncionario CHAR(11) UNIQUE NOT NULL
);

