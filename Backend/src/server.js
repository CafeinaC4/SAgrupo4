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
    const { nomefuncionario, emailfuncionario, senhafuncionario, cpffuncionario } = req.body
    try {
        const result = await pool.query(
            'INSERT INTO funcionarios (nomefuncionario, emailfuncionario, senhafuncionario, cpffuncionario) VALUES ($1, $2, $3, $4) RETURNING *',
            [nomefuncionario, emailfuncionario, senhafuncionario, cpffuncionario]
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
        const result = await pool.query('SELECT * FROM funcionarios');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar funcionarios' });
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
    const { nomefuncionario, emailfuncionario, senhafuncionario, cpffuncionario } = req.body;
    try {
        const result = await pool.query(
            'UPDATE clientes SET nomefuncionario = $1, emailfuncionario = $2, senhafuncionario = $3, cpffuncionario = $4 WHERE idfuncionario = $5 RETURNING *',
            [nomefuncionario, emailfuncionario, senhafuncionario, cpffuncionario, idfuncionario]
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
app.delete('/funcionarios/:idfuncionario', async (req, res) => {
    const { idfuncionario } = req.params;
    try {
        const result = await pool.query('DELETE FROM funcionario WHERE idfuncionario = $1 RETURNING *', [idfuncionario]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Funcionario não encontrado' });
        }
        res.json({ message: 'Funcionario deletado com sucesso' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao deletar cliente' });
    }
});


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
