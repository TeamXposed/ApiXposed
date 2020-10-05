const mongoose = require('mongoose');

const usuario = new mongoose.Schema ({
    
    nome: {
        type: String,
        required: 'Campo Obrigatório',
        trim: true
    },

    telefone: {
        type: String,
        required: 'Campo Obrigatório',
        trim: true
    },

    email: {
        type: String,
        required: 'Campo Obrigatório',
        trim: true
    },

    senha: {
        type: String,
        required: 'Campo Obrigatório',
        trim: true
    },

    cpf: {
        type: String,
        required: 'Campo Obrigatório',
        trim: true,
        minlength: [11, 'Por favor informe os onzes números do seu cpf'],
        maxlength: [11, 'Por favor informe os onzes números do seu cpf']
    }
})

module.exports = mongoose.model('usuario', usuario)


