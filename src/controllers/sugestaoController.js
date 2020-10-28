const sugestao = require('../models/sugestaoModel')

// Criação das funcionalidades das sugestões

exports.criar = (req, res) => {
    const { comentario } = req.body
    let novoSugestao = new sugestao({ comentario })
    novoSugestao.save((error, sugestao) => {
        if (error) {
            res.send(error);
        }
        res.send('Sua sugestão foi criada com sucesso!')
    })
}

exports.listar = function (req, res) {
    sugestao.find({}, function (error, sugestao) {
        if (error) {
            res.send(error);
        }
        res.json(sugestao);
    })
}

exports.atualizar = (req, res) => {
    sugestao.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (error, sugestao) => {
        if (error) {
            res.send(error);
        }
        let resposta = {
            mensagem: 'A sugestão foi atualizado!',
            data: sugestao
        }
        res.send('Sua sugestão foi atualizada com sucesso')
    })
}

exports.deletar = (req, res) => {
    sugestao.remove({ _id: req.params.id }, (error, sugestao) => {
        if (error) {
            res.send(error);
        }
        let resposta = {
            mensagem: 'Sugestão deletada!',
            data: sugestao
        }
        res.send('Sua sugestão foi deletada com sucesso')
    })
}