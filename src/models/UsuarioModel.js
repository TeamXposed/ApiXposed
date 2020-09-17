const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuario = new Schema ({
    
    nome: {
        type: String,
        required: 'Campo Obrigatório'
    },

    telefone: {
        type: String,
        required: 'Campo Obrigatório'
    },

    email: {
        type: String,
        required: 'Campo Obrigatório'
    },

    senha: {
        type: String,
        required: 'Campo Obrigatório'
    },

    cpf: {
        type: String,
        required: 'Campo Obrigatório'
    }
})

module.exports = mongoose.model('usuario', usuario)


