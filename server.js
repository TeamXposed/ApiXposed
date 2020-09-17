//Importando todas as bibliotecas
var express = require('express'),
app = express(),
port = process.env.PORT || 3000
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const conection = require('./src/conection/conec');
  
//Configuração para pegar o que ser informado via json ou url
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Importando as rotas
const routeusuario = require('./src/routes/denunciaRoute'); 
routeusuario(app);


// Chamando Conexão do MongoAtlas
conexao();

// startando o servidor na porta
app.listen(port);
console.log('API em funcionamento');