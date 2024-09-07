import express from 'express'
import cors from 'cors'


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
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()

        const htmlResponse = data.map(user => `<div>${user.name} - ${user.email}</div>`).join("")

        res.send(htmlResponse)
    },2500)
})

app.listen(port, () => console.log(`servidor rodando http://localhost:${port}`))


function fotoGenerateHTML(person, pathImagem){
    const htmlResponse = `
        <div id="primeira-rota">
            <button 
                type="button" 
                hx-get="/primeira-rota/${person}" 
                hx-target="#primeira-rota" 
                hx-swap="outerHTML"
            >
                Alterar Foto
            </button>
            <br>
            <img 
                src="${pathImagem}" alt="" width="400" 
                alt="" 
                width="400"
            >
            <br>
        </div>
    `
    return htmlResponse
}
