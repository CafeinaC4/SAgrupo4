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
app.get('/Funcionarios', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM clientes');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar clientes' });
    }
});

// Rota para buscar um cliente por ID
app.get('/Funcionarios/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM clientes WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Cliente não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar cliente' });
    }
});

// Rota para adicionar um cliente
app.post('/Funcionarios', async (req, res) => {
    const { nome, endereco, email, telefone } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO Funcionarios (nome, endereco, email, telefone) VALUES ($1, $2, $3, $4) RETURNING *',
            [nome, endereco, email, telefone]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao adicionar cliente' });
    }
});

// Rota para atualizar um cliente
app.put('/Funcionarios/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, endereco, email, telefone } = req.body;
    try {
        const result = await pool.query(
            'UPDATE Funcionarios SET nome = $1, endereco = $2, email = $3, telefone = $4 WHERE id = $5 RETURNING *',
            [nome, endereco, email, telefone, id]
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
app.delete('/Funcionarios/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM Funcionarios WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Funcionario não encontrado' });
        }
        res.json({ message: 'Funcionario deletado com sucesso' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao deletar funcionario' });
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
