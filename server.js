//Importando todas as bibliotecas
var express = require('express'),
app = express(),
port = process.env.PORT || 3000
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const conection = require('./src/conection/conection');
  
//Configuração para pegar o que ser informado via json ou url
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Importando as rotas e jogando no serviço
const route = require('./src/routes/routes'); 
route(app);


// Chamando Conexão do MongoAtlas
conection();

// startando o servidor na porta
app.listen(port);
console.log('API em funcionamento');