const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jogo = new Schema ({
    
    nome: {
        type: String,
        required: 'Campo Obrigatório'
    },

    tipo: {
        type: String,
        required: 'Campo Obrigatório'
    },

    ano: {
        type: Date,
        required: 'Campo Obrigatório'
    },

    descricao: {
        type: String,
        required: 'Campo Obrigatório'
    },
})

module.exports = mongoose.model('jogo', jogo)