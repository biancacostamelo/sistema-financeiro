    const express = require('express')
    const mysql = require('mysql')
    const bodyparser = require('body-parser')
    const cors = require('cors')
    const app = express()
    app.use(cors())
    app.use(bodyparser.json())
    app.use(bodyparser.urlencoded({extended:true}))

    const conexao = mysql.createConnection({
        host: 'localhost',
        password: '',
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
        const {categoria, preco, data, descricao} = req.body
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
        const {categoria, preco, tipoPagamento, dataSaidas, descricao} = req.body
        const query = 'insert into saidas (categoria, preco, tipoPagamento, dataSaidas, descricao) values (?,?,?,?,?)'
        conexao.query(query, [categoria, preco, tipoPagamento, dataSaidas, descricao], (erro) => {
            if (erro) {
                res.status(500).send('erro ao inserir saidas')
            } else {
                res.send('adicionado com sucesso')
            }
        })
    })

    app.get('/todassaidas', (req, res) => {
        const query = 'select * from saidas'
        conexao.query(query, (erro, resultado)=>{
            if (erro) {
            res.status(500).send('erro ao buscar dados') 
            } else {
                res.json(resultado)
            }
        })
    })

    app.get('/todasentradas', (req, res) => {
        const query = 'select * from entradas'
        conexao.query(query, (erro, resultado)=>{
            if (erro) {
            res.status(500).send('erro ao buscar dados') 
            } else {
                res.json(resultado)
            }
        })
    })

    app.listen(3005, () => {
        console.log('conectado ao servidor')
    })