const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const denuncia = new Schema ({
    
    nome: {
        type: String,
        required: 'Campo Obrigatório'
    },

    assunto: {
        type: String,
        required: 'Campo Obrigatório'
    },

    nick_denuniado: {
        type: String,
        required: 'Campo Obrigatório'
    },

    jogo: {
        type: String,
        required: 'Campo Obrigatório'
    },

    descricao: {
        type: String,
        required: 'Campo Obrigatório'
    },

    /*  ---- Pesquisar sobre anexo ----
        anexo: {
        type: String,
        required: 'Campo Obrigatório'
    },
    */
})

module.exports = mongoose.model('denuncia', denuncia)
