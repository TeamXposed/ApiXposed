const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sugestao = new Schema({

    comentario: {
        type: String,
        required: 'Campo Obrigatório',
        trim: true
    }

})

module.exports = mongoose.model('sugestao', sugestao)