const jogos = require('../models/JogoModel')

// Criação das funcionalidades de Jogos

exports.criar = (req,res) => {
    const { nome, tipo, ano, descricao} = req.body
    let novoJogo = new jogos({ nome, tipo, ano, descricao})
    novoJogo.save((error, jogos) =>{
        if(error){
            res.send(error);
        }
        res.json(jogos)
    })
}

exports.listar = function(req,res) {
    jogos.find({}, function(error,jogos) {
        if(error){
            res.send(error);
        }
        res.json(jogos);
    })
}

exports.listarId = function(req, res) {
	jogos.findById(req.params.id, function(err, jogos) {
		if(err)
			res.send(err)
		res.json(jogos)
	})
}

exports.atualizar = (req,res) => {
    jogos.findOneAndUpdate({_id: req.params.id }, req.body,{new: true} ,(error, jogos) =>{
        if(error){
            res.send(error);
        }
        let resposta = {
            mensagem: 'O Jogo foi atualizado!',
            data : jogos
        }
        res.send(jogos);
    })
}

exports.deletar = (req,res) => {
    jogos.remove({_id: req.params.id}, (error,jogos) => {
        if(error){
            res.send(error);
        }
        let resposta = {
            mensagem: 'Jogo deletado!',
            data: jogos
        }
        res.send(resposta);
    })
}
