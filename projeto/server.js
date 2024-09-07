import express from 'express'
import cors from 'cors'
import { fotoGenerateHTML, frasesMotivacionais, gerarFraseAleatoria } from './utils.js'

const app = express()
const port = 1992

app.use(cors())
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.get("/primeira-rota/:person", (req, res) => {
    const person = req.params.person
    const elon = "https://jpimg.com.br/uploads/2024/04/5d9d5d83925daffee39dfab59fdf443d0821eece-675x450.jpg"
    const bill = "https://wallpapers.com/images/high/bill-gates-1920-x-1200-background-ein611w7kzivnwrw.webp"
    if(person === 'bill'){
        const htmlResponse =  fotoGenerateHTML("elon", elon)
        return res.send(htmlResponse)
    } else if(person === 'elon'){
        const htmlResponse = fotoGenerateHTML("bill", bill)
        return res.send(htmlResponse)
    } else {
        const htmlResponse = fotoGenerateHTML("bill", bill)
        return res.send(htmlResponse)
    }
})

app.get("/users", async (req, res) => {
    setTimeout(async () => {
        const limit = +req.query.limit
     
        const response = await fetch(`https://jsonplaceholder.typicode.com/users?_limit=${limit}`)
        const data = await response.json()

        const htmlResponse = data.map(user => `<div>${user.name} - ${user.email}</div>`).join("")

        res.send(htmlResponse)
    },2500)
})

app.get("/frases", (req, res) => {
    const frase = gerarFraseAleatoria(frasesMotivacionais)
    res.send(`${frase}`)
})

app.get("/info", (req, res) => {
    const nome = req.query.nome
    const cargo = req.query.cargo
    res.send(`Olá ${nome} com o cargo: ${cargo}`)
})

app.get("/dados", (req, res) => {
    setTimeout(() => {
        res.send("Dados carregados")
    }, 5000)
})

app.get('/usuarios_data', (req, res) => {
    const usuariosData = [
        {id: 1, name: "Dante", email: "dante@teste.com.br"},
        {id: 2, name: "Talu", email: "talu@teste.com.br"},
        {id: 1, name: "Delinha", email: "dela@teste.com.br"},
        {id: 1, name: "Maia", email: "donamaia@teste.com.br"}
    ]
    res.json(usuariosData)
})

app.get("/search", (req, res) => {
    res.status(500).send("Erro no servidor")
})

app.listen(port, () => console.log(`servidor rodando http://localhost:${port}`))



