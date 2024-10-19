const express = require('express')
const router = express.Router()

const app = express()
const porta = 3333

function mostra_OLA(request, response) {
   response.send("Ola, Mundo!") 
}


function mostrar_porta() {
    console.log('Servidor criado e rodando a porta:', porta)
}

app.use(router.get("/ola", mostra_OLA))
app.listen(porta, mostrar_porta)

