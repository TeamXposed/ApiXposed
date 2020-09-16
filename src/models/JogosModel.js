const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jogos = new Schema ({
    
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