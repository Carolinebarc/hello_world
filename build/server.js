"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 3000;
app.get('/', function (request, response) {
    ; // rota padrão
    response.send('Hello Word');
});
app.get('/BSMs', function (request, response) {
    ; // rota padrão
    response.send('Hello Word <br> *Persistência <br>' +
        '*Responsabilidade Pessoal <br> *Orientação ao Futuro <br> *Mentalidade de Crescimento <br>');
});
app.get('/BSMs/Objetivos_de_aprendizagem_da_semana', function (request, response) {
    ; // rota padrão
    response.send('Hello Word <br> *Persistência <br> *Responsabilidade Pessoal <br> *Orientação ao Futuro <br>' +
        '*Mentalidade de Crescimento <br> Em Hard Skills aprendi sobre Banco de Dados no MySQL e Node Express <br>' +
        'Em Soft Skills pratiquei Persistência, Atenção aos detalhes e Comunicação');
});
app.listen(port, function () {
    console.log("Server is running at port ".concat(port, "!"));
});
