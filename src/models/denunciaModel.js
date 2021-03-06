const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const denuncia = new Schema ({
    
    nome_denunciante: {
        type: String,
        required: 'Campo Obrigatório',
        trim: true
    },

    assunto: {
        type: String,
        required: 'Campo Obrigatório',
        trim: true
    },

    nick_denunciado: {
        type: String,
        required: 'Campo Obrigatório',
        trim: true
    },

    nome_jogo: {
        type: String,
        required: 'Campo Obrigatório',
        trim: true
    },

    descricao: {
        type: String,
        required: 'Campo Obrigatório',
        trim: true
    },

    cont:{
        type: Number,
    },

})

module.exports = mongoose.model('denuncia', denuncia)
