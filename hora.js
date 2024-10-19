const express = require('express')
const router = express.Router()

const app = express()
const porta = 3333


function mostrar_Hora(request, response) {
    const data = new Date() 
    const hora = data.toLocaleTimeString('pt-BR') 
    response.send(hora)  
   }

function mostrar_porta() {
    console.log('Servidor criado e rodando a porta:', porta)
}

app.use(router.get("/hora", mostrar_Hora))
app.listen(porta, mostrar_porta)