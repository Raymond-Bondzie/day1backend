const express = require('express')

const server = express();

const path = require('path')

// const handleRequest = (req , res) => {
//     res.send("hello world")
// }

const handleHomeRequest = (req, res) => {
    let homePath = path.join(__dirname, 'public', 'pages', 'home.html')

    res.sendFile(homePath)
}

const handleAboutRequest = (req, res) => {
    let aboutPath = path.join(__dirname, 'public', 'pages', 'about.html')
    res.sendFile(aboutPath)
}

// server.use('/', handleRequest)
server.get('/about', handleAboutRequest)
 server.get("/", handleHomeRequest);



server.listen("3500", () => {
    console.log('server is running on port 6000');
})