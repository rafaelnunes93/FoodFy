const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes')
const methodOverride = require("method-override");

const server = express();

// responsavel por funcionar o req body
server.use(express.urlencoded({ extended: true }))
server.use(express.static('public'))
server.use(express.static('assets'))
//colocar methodo override antes das rotas
//sobre escreve o methodo post assim o put e o delet funcionam
server.use(methodOverride('_method'));
server.use(routes)

//Fazer os methodos put e delete funcionar


server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})



server.listen(5000, function () {
    console.log("server is running");
})