import express from "express"
import bodyParser from "body-parser"
import route from "./router/router.js"
import cors from "cors"
const porta = 6969


const app = express()
app.use(cors())
app.use(bodyParser.json())

app.use(route)

app.listen(porta, () => {console.log("foi")})