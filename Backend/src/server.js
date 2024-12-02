const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Old Relics',
    password: 'senai',
    port: 5432,
});
app.use(cors());
app.use(express.json());

// Rota pra criar um funcionario
app.post('/funcionarios', async (req, res) => {
    const { idfuncionario, nomefuncionario, emailfuncionario, senhafuncionario, cpffuncionario } = req.body
    try {
        const result = await pool.query(
            'INSERT INTO funcionarios (idfuncionario, nomefuncionario, emailfuncionario, senhafuncionario, cpffuncionario) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [idfuncionario, nomefuncionario, emailfuncionario, senhafuncionario, cpffuncionario]
        )
        res.status(201).json(result.rows[0])
    } catch (err) {
        console.error(err.message)
        res.status(500).json({ error: 'Erro ao cadastrar usuário!' })
    }
})

// Rota para buscar todos os funcionarios
app.get('/funcionarios', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM clientes');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar clientes' });
    }
});

// Rota para buscar um funcionario por ID
app.get('/funcionarios/:idfuncionario', async (req, res) => {
    const { idfuncionario } = req.params;
    try {
        const result = await pool.query('SELECT * FROM funcionarios WHERE id = $1', [idfuncionario]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Funcionario não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar funcionario' });
    }
});

// Rota para atualizar um funcionario
app.put('/funcionarios/:idfuncionario', async (req, res) => {
    const { idfuncionario } = req.params;
    const { nome, endereco, email, telefone } = req.body;
    try {
        const result = await pool.query(
            'UPDATE clientes SET nome = $1, endereco = $2, email = $3, telefone = $4 WHERE id = $5 RETURNING *',
            [nome, endereco, email, telefone, idfuncionario]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Cliente não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao atualizar cliente' });
    }
});

// Rota para deletar um funcionario
app.delete('/clientes/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM clientes WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Cliente não encontrado' });
        }
        res.json({ message: 'Cliente deletado com sucesso' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao deletar cliente' });
    }
});


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
