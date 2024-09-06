import express from 'express'
import cors from 'cors'

const app = express()
const port = 1992

app.use(cors())
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get("/primeira-rota", (req, res) => {
    const htmlResponse = `<img src="https://jpimg.com.br/uploads/2024/04/5d9d5d83925daffee39dfab59fdf443d0821eece-675x450.jpg" alt="" width="400">`
    setTimeout(() => {
        res.send(htmlResponse)
    }, 2500)
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