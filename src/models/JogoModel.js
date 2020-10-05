const mongoose = require('mongoose');

const Jogo = new mongoose.Schema({
    
    nome: {
        type: String,
        required: 'Campo Obrigatório',
        trim: true
    },

    tipo: {
        type: String,
        required: 'Campo Obrigatório',
        trim: true
    },

    ano: {
        type: String,
        required: 'Campo Obrigatório',
        trim: true
    },

    descricao: {
        type: String,
        required: 'Campo Obrigatório',
        trim: true
    }
})

module.exports = mongoose.model('Jogos', Jogo);