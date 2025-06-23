const express = require('express')
const mysql = require('mysql')
const bodyparser = require('body-parser')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

const conexao = mysql.createConnection({
    host: 'localhost',
    password: 'root',
    database: 'financeiro',
    user: 'root'
})

conexao.connect((erro) => {
    if (erro) {
        console.error('não conectado ao banco de dados', erro)
    } else {
        console.log('conectado ao banco de dados')
    }
})

app.post('/entradas', (req, res) => {
    const { categoria, preco, data, descricao } = req.body
    const query = 'insert into entradas (categoria, preco, dataEntrada, descricao) values (?,?,?,?)'
    conexao.query(query, [categoria, preco, data, descricao], (erro) => {
        if (erro) {
            res.status(500).send('erro ao inserir dados')
        } else {
            res.send('adicionado com sucesso')
        }
    })
})

app.post('/saidas', (req, res) => {
    const { categoria, preco, tipoPagamento, data, descricao } = req.body
    const query = 'insert into saidas (categoria, preco, tipoPagamento, dataSaidas, descricao) values (?,?,?,?,?)'
    conexao.query(query, [categoria, preco, tipoPagamento, data, descricao], (erro) => {
        if (erro) {
            res.status(500).send('erro ao inserir saidas')
        } else {
            res.send('adicionado com sucesso')
        }
    })
})

app.get('/todassaidas', (req, res) => {
    const query = 'select * from saidas ORDER BY dataSaidas ASC'
    conexao.query(query, (erro, resultado) => {
        if (erro) {
            res.status(500).send('erro ao buscar dados')
        } else {
            res.json(resultado)
        }
    })
})

app.get('/todasentradas', (req, res) => {
    const query = 'select * from entradas ORDER BY dataEntrada ASC'
    conexao.query(query, (erro, resultado) => {
        if (erro) {
            res.status(500).send('erro ao buscar dados')
        } else {
            res.json(resultado)
        }
    })
})


app.get('/topgastos', (req, res) => {
    const { startDate, endDate } = req.query
    const query = 'SELECT categoria, preco FROM saidas WHERE dataSaidas BETWEEN ? AND ? ORDER BY preco DESC LIMIT 5'
    conexao.query(query, [startDate, endDate], (erro, resultado) => {
        if (erro) {
            res.status(500).send('erro ao buscar dados')
        } else {
            res.json(resultado)
        }
    })
})

app.get('/filtroreceitas', (req, res) => {
    const { startData, endData } = req.query
    const query = 'SELECT * FROM entradas WHERE dataEntrada BETWEEN ? AND ? ORDER BY dataEntrada ASC'
    conexao.query(query, [startData, endData], (erro, resultado) => {
        if (erro) {
            res.status(500).send('erro ao buscar dados')
        } else {
            res.json(resultado)
        }
    })
})

app.get('/filtroreceitas1', (req, res) => {
    const { startDate, endDate } = req.query
    const query = 'SELECT * FROM entradas WHERE dataEntrada BETWEEN ? AND ? ORDER BY dataEntrada ASC'
    conexao.query(query, [startDate, endDate], (erro, resultado) => {
        if (erro) {
            res.status(500).send('erro ao buscar dados')
        } else {
            res.json(resultado)
        }
    })
})

app.get('/gastosedespesas', (req, res) => {
    const { startDate, endDate } = req.query;
    
    const query = `
        SELECT 
            id, 
            preco, 
            dataEntrada AS data, 
            categoria,
            'receita' AS tipo
        FROM entradas
        WHERE dataEntrada BETWEEN ? AND ?
        
        UNION ALL
        
        SELECT 
            id,  
            preco, 
            dataSaidas AS data, 
            categoria,
            'despesa' AS tipo
        FROM saidas
        WHERE dataSaidas BETWEEN ? AND ?
        
        ORDER BY data ASC;
    `;

    conexao.query(query, [startDate, endDate, startDate, endDate], (erro, resultado) => {
        if (erro) {
            res.status(500).send('Erro ao buscar dados');
        } else {
            res.json(resultado);
        }
    });
});


app.get('/filtrodespesas', (req, res) => {
    const { startData, endData } = req.query
    const query = 'SELECT * FROM saidas WHERE dataSaidas BETWEEN ? AND ? ORDER BY dataSaidas ASC'
    conexao.query(query, [startData, endData], (erro, resultado) => {
        if (erro) {
            res.status(500).send('erro ao buscar dados')
        } else {
            res.json(resultado)
        }
    })
})



app.get('/topgastosporcategoria', (req, res) => {
    const { startDate, endDate } = req.query
    const query = 'SELECT categoria, SUM(preco) as total FROM saidas  WHERE dataSaidas BETWEEN ? AND ? GROUP BY categoria ORDER BY total'
    conexao.query(query, [startDate, endDate], (erro, resultado) => {
        if (erro) {
            res.status(500).send('erro ao buscar dados')
        } else {
            res.json(resultado)
        }
    })
})

app.get('/gastosportipopagamento', (req, res) => {
    const { startDate, endDate } = req.query
    const query = 'SELECT tipoPagamento, SUM(preco) as total FROM `saidas` WHERE dataSaidas BETWEEN ? AND ? GROUP BY(tipoPagamento)'
    conexao.query(query, [startDate, endDate], (erro, resultado) => {
        if (erro) {
            res.status(500).send('erro ao buscar dados')
        } else {
            res.json(resultado)
        }
    })
})

app.get('/gastosaolongodotempo', (req, res) => {
    const { startDate, endDate } = req.query
    const query = 'SELECT dataSaidas, SUM(preco) as total FROM saidas WHERE dataSaidas BETWEEN ? AND ? GROUP BY dataSaidas'
    conexao.query(query, [startDate, endDate], (erro, resultado) => {
        if (erro) {
            res.status(500).send('erro ao buscar dados')
        } else {
            res.json(resultado)
        }
    })
})

app.get('/saldototal', (req, res) => {
    const { startDate, endDate } = req.query
    const query = 'SELECT SUM(preco) FROM entradas '
    conexao.query(query, [startDate, endDate], (erro, resultado) => {
        if (erro) {
            res.status(500).send('erro ao buscar saldo total')
        } else {
            res.json(resultado)
        }
    })
})

app.get('/saidastotais', (req, res) => {
    const { startDate, endDate } = req.query
    const query = 'SELECT sum(preco) FROM saidas'
    conexao.query(query, [startDate, endDate], (erro, resultado) => {
        if (erro) {
            res.status(500).send('erro ao buscar saidas totais')
        } else {
            res.json(resultado)
        }
    })
})

app.delete("/todassaidas/:id", (req, res) => {
    const trid = req.params.id
    const query = 'delete from saidas where id = ?'
    conexao.query(query, [trid], (erro, resultado) => {
        if (erro) {
            res.status(500).send('erro')
        } else {
            res.json(resultado)
        }
    })
})

app.delete("/todasentradas/:id", (req, res) => {
    const trid = req.params.id
    const query = 'delete from entradas where id = ?'
    conexao.query(query, [trid], (erro, resultado) => {
        if (erro) {
            res.status(500).send('erro')
        } else {
            res.json(resultado)
        }
    })
})

app.put('/update/:id', (req, res)=>{
    const id = req.params.id
    const { categoria, preco, tipoPagamento, dataSaidas, descricao } = req.body
    const query = 'update saidas set `categoria`= ?, `preco`= ?, `tipoPagamento`=?, `dataSaidas`= ?, `descricao`= ? where id = ?'
    conexao.query(query, [categoria, preco, tipoPagamento, dataSaidas, descricao, id], (erro, resultado) => {
        if (erro) {
           res.status(500).send('erro') 
        } else {
            res.json(resultado)
        }
    })
})

app.put('/updateentrada/:id', (req, res)=>{
    const id = req.params.id
    const { categoria, preco, data, descricao } = req.body
    const query = 'update entradas set `categoria`= ?, `preco`= ?, `dataEntrada`=?, `descricao`= ? where id = ?'
    conexao.query(query, [categoria, preco, data, descricao, id], (erro, resultado) => {
        if (erro) {
           res.status(500).send('erro') 
        } else {
            res.json(resultado)
        }
    })
})

app.get('/detailsentradas/:id', (req, res) => {
    const id = req.params.id
    const query = 'SELECT * FROM entradas WHERE id = ?'
    conexao.query(query, [id], (erro, resultado) => {
        if (erro) {
            res.status(500).send('Erro ao buscar dados') 
        } else if (resultado.length === 0) {
            res.status(404).json({ mensagem: 'Registro não encontrado' })
        } else {
            res.json(resultado)
        }
    })
})

app.get('/details/:id', (req, res) => {
    const id = req.params.id
    const query = 'SELECT * FROM saidas WHERE id = ?'
    conexao.query(query, [id], (erro, resultado) => {
        if (erro) {
            res.status(500).send('Erro ao buscar dados') 
        } else if (resultado.length === 0) {
            res.status(404).json({ mensagem: 'Registro não encontrado' })
        } else {
            res.json(resultado)
        }
    })
})



app.listen(3005, () => {
    console.log('conectado ao servidor')
})