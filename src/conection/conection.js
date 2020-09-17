var mongoose = require('mongoose');

const uri = 
'mongodb+srv://caio:caio@cluster0.ye3xt.mongodb.net/<dbname>?retryWrites=true&w=majority';

const conexao = async() =>{
  await mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    console.log('banco conectado!');
}

module.exports = conexao;