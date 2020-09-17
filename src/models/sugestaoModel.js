const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sugestao = new Schema ({
    
    nome: {
        type: String,
        required: 'Campo Obrigatório'
    },

    jogo: {
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
  
    comentario: {
        type: String,
        required: 'Campo Obrigatório'
    }

})

module.exports = mongoose.model('sugestao', sugestao)