const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
    user: 'postgres', // Substitua pelo seu usuário do PostgreSQL
    host: 'localhost',
    database: 'OldRelics', // Nome da sua database
    password: 'senai', // Substitua pela sua senha
    port: 5432, // Porta padrão do PostgreSQL
});

// Habilitar CORS para todas as rotas
app.use(cors());
app.use(express.json());

// Rota para buscar todos os clientes
app.get('/funcionarios', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM Funcionarios');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar funcionario' });
    }
});

// Rota para buscar um cliente por ID
app.get('/funcionarios/:idfuncionario', async (req, res) => {
    const { idfuncionario } = req.params;
    try {
        const result = await pool.query('SELECT * FROM funcionarios WHERE idfuncionario = $1', [idfuncionario]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'funcionario não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar funcionario' });
    }
});

// Rota para adicionar um cliente
app.post('/funcionarios', async (req, res) => {
    const { idfuncionario, nomefuncionario, emailfuncionario, senhafuncionario, cpffuncionario } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO funcionarios (idfuncionario, nomefuncionario, emailfuncionario, senhafuncionario, cpffuncionario) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [idfuncionario, nomefuncionario, emailfuncionario, senhafuncionario, cpffuncionario]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao adicionar funcionario' });
    }
});

// Rota para atualizar um cliente
app.put('/funcionarios/:idfuncionario', async (req, res) => {
    const { idfuncionario } = req.params;
    const { nomefuncionario, emailfuncionario, senhafuncionario, cpffuncionario } = req.body;
    try {
        const result = await pool.query(
            'UPDATE funcionarios SET idfuncionario = $1, noemfuncionario = $2, emailfuncionario = $3, senhafuncionario = $4 WHERE cpffuncionario = $5 RETURNING *',
            [idfuncionario, nomefuncionario, emailfuncionario, senhafuncionario, cpffuncionario]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Funcionario não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao atualizar funcionario' });
    }
});

// Rota para deletar um cliente
app.delete('/funcionarios/:idfucionario', async (req, res) => {
    const { idfuncionario } = req.params;
    try {
        const result = await pool.query('DELETE FROM Funcionarios WHERE idfuncionario = $1 RETURNING *', [idfuncionario]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Funcionario não encontrado' });
        }
        res.json({ message: 'Funcionario deletado com sucesso' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao deletar funcionario' });
    }
});

app.listen(5432, () => {
    console.log('Servidor rodando na porta 5432');
});
