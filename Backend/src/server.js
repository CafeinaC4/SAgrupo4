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
            return res.status(404).json({ error: 'Funcionario não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao atualizar funcionario' });
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
        res.status(500).json({ error: 'Erro ao deletar funcionario' });
    }
});

// Crud dos itens

//Adicionar item
app.post('/itens', async (req, res) => {
    const { nomeitem, idadeitem, dataaquisicaoitem, tipoitem, descricaoitem, itemestoque, datavendaitem } = req.body
    try {
        const result = await pool.query(
            'INSERT INTO itens (nomeitem, idadeitem, dataaquisicaoitem, tipoitem, descricaoitem, itemestoque, datavendaitem) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            [nomeitem, idadeitem, dataaquisicaoitem, tipoitem, descricaoitem, itemestoque, datavendaitem]
        )
        res.status(201).json(result.rows[0])
    } catch (err) {
        console.error(err.message)
        res.status(500).json({ error: 'Erro ao cadastrar produto!' })
    }
})

// Rota para buscar todos os item
app.get('/itens', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM itens');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar itens' });
    }
});

// Rota para buscar um item por ID
app.get('/itens/:iditem', async (req, res) => {
    const { iditem } = req.params;
    try {
        const result = await pool.query('SELECT * FROM itens WHERE iditem = $1', [iditem]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar produto' });
    }
});

// Rota para atualizar um item
app.put('/itens/:iditem', async (req, res) => {
    const { iditem } = req.params;
    const { nomeitem, idadeitem, dataaquisicaoitem, tipoitem, descricaoitem, itemestoque, datavendaitem } = req.body;
    try {
        const result = await pool.query(
            'UPDATE clientes SET nomeitem = $1, idadeitem = $2, dataaquisicaoitem = $3, tipoitem = $4, itemestoque = $5, datavendaitem = $6 WHERE iditem = $7 RETURNING *',
            [nomeitem, idadeitem, dataaquisicaoitem, tipoitem, descricaoitem, itemestoque, datavendaitem, iditem]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao atualizar produto' });
    }
});

// Rota para deletar um item
app.delete('/itens/:iditem', async (req, res) => {
    const { iditem } = req.params;
    try {
        const result = await pool.query('DELETE FROM funcionario WHERE iditem = $1 RETURNING *', [iditem]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Item não encontrado' });
        }
        res.json({ message: 'Item deletado com sucesso' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao deletar item' });
    }
});



app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
