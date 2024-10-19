const express = require('express')
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: "Ana Klara",
        imagem: "https://pin.it/5p9OsFsSe",
        minibio: "Grande pessoa"
    },

    {
        nome: "Iana Chan",
        imagem: "https://bit.ly/3JCXBqP'",
        minibio: "Fundadora da PrograMaria"
    },

    {
        nome: 'Luana Pimentel',
        imagem: 'https://bit.ly/3FKpFaz',
        minibio: 'Senior Staff Software Engineer',
    }
]

function mostra_mulheres(request, response) {
    response.json(mulheres)
}

function mostrar_porta() {
    console.log('Servidor criado e rodando a porta:', porta)
}

app.use(router.get("/mulheres", mostra_mulheres))
app.listen(porta, mostrar_porta)