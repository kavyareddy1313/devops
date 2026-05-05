const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.send('hello')
})
app.listen(3000, () => {
    console.log("server is runing in 3000 port hi aws run the server")
})