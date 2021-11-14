const express = require('express')
const cors = require('cors')
const e = require('express')

const app = express()
const port = 3000

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json({
    type: "*/*"
}))

app.use(cors());

app.get("/productos", (req, res) => {
    console.log("Me llego un get")
})

app.post("/productos", (req, res) => {
    console.log(req.body);
})

app.listen(port, () =>{
    console.log('Me Estoy ejecutando en http://localhost:' + port)
})


