const express = require('express')

const server = express();

const handleRequest = (req , res) => {
    res.send("hello world")
}

server.use('/', handleRequest)

server.listen("3500", () => {
    console.log('server is running on port 6000');
})