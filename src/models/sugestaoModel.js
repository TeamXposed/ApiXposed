const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sugestao = new Schema ({
    
    nome: {
        type: String,
        required: 'Campo Obrigatório',
        trim: true
    },

    jogo: {
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
    },
  
    comentario: {
        type: String,
        required: 'Campo Obrigatório',
        trim: true
    }

})

module.exports = mongoose.model('sugestao', sugestao)