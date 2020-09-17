const denuncia = require('../models/denunciaModel')

// Criação das funcionalidades de Jogos

exports.criar = (req,res) => {
    const { nome, assunto, nick_denunciado, jogo, descricao} = req.body
    let novaDenuncia = new denuncia({ nome, assunto, nick_denunciado, jogo, descricao})
    novaDenuncia.save((error, denuncia) =>{
        if(error){
            res.send(error);
        }
        res.send('Sua denúncia foi feita com sucesso')
    })
}

exports.listar = function(req,res) {
    denuncia.find({}, function(error,denuncia) {
        if(error){
            res.send(error);
        }
        res.json(denuncia);
    })
}

exports.listarId = function(req, res) {
	denuncia.findById(req.params.id, function(err, denuncia) {
		if(err){
            res.send(err)
        }
		res.json(denuncia)
	})
}

exports.atualizar = (req,res) => {
    denuncia.findOneAndUpdate({_id: req.params.id }, req.body,{new: true} ,(error, denuncia) =>{
        if(error){
            res.send(error);
        }
        res.send('Sua denúncia foi atualizada com sucesso')
    })
}

exports.deletar = (req,res) => {
    denuncia.remove({_id: req.params.id}, (error,denuncia) => {
        if(error){
            res.send(error);
        }
        res.send('Sua denúncia foi deletada com sucesso')
    })
}
