const express = require('express')
const app = express()
const port = 80
const server = require('http').createServer().listen(80)

app.get('', (req, res) => {
    var today = new Date()
    res.send(today)
    
})

app.listen(port)