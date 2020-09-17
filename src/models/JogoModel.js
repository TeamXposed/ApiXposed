const mongoose = require('mongoose');

const Jogo = new mongoose.Schema({
    
    nome: {
        type: String,
        required: 'Campo Obrigatório'
    },

    tipo: {
        type: String,
        required: 'Campo Obrigatório'
    },

    ano: {
        type: String,
        required: 'Campo Obrigatório'
    },

    descricao: {
        type: String,
        required: 'Campo Obrigatório'
    }
})

module.exports = mongoose.model('Jogos', Jogo);