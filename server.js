const express = require('express')

const app = express()
const porta = 3333

function mostrar_porta() {
    console.log('Servidor criado e rodando a porta:', porta)
}

app.listen(porta, mostrar_porta)
