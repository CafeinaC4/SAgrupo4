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

// Habilitar CORS para todas as rotas
app.use(cors());
app.use(express.json());

app.post('/funcionarios', async (req, res) => {
    const { idfuncionario, nomefuncionario, emailfuncionario, senhafuncionario, cpffuncionario } = req.body
    try {
        // Query para inserção do user no banco de dados
        const result = await pool.query(
            'INSERT INTO funcionarios (idfuncionario, nomefuncionario, emailfuncionario, senhafuncionario, cpffuncionario) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [idfuncionario, nomefuncionario, emailfuncionario, senhafuncionario, cpffuncionario]
        )
        res.status(201).json(result.rows[0])
    } catch (err) {
        console.error(err.message)
        res.status(500).json({ error: 'Erro ao cadastrar usuário! :(' })
    }
})



app.listen(5432, () => {
    console.log('Servidor rodando na porta 5432');
});
