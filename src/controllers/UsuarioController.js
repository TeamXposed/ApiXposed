const Usuario = require('../models/UsuarioModel')

// Criação das funcionalidades do usuário

exports.criar = (req,res) => {
    const { nome, telefone, email, senha, cpf} = req.body
    let novoUsuario = new Usuario({ nome, telefone, email, senha, cpf})
    novoUsuario.save((error, usuario) =>{
        if(error){
            res.send(error);
        }
        res.send('Seu usuário foi criado com sucesso')
    })
}

exports.listar = function(req,res) {
    Usuario.find({}, function(error,usuario) {
        if(error){
            res.send(error);
        }
        res.json(usuario);
    })
}

exports.getEmail = function(req, res) {
	Usuario.find({email: req.params.email}, function(err, usuario) {
		if(err)
			res.send(err)
		res.json(usuario)
	})
}

exports.getSenha = function(req, res) {
	Usuario.find({senha: req.params.senha}, function(err, usuario) {
		if(err)
			res.send(err)
		res.json(usuario)
	})
}


exports.atualizar = (req,res) => {
    Usuario.findOneAndUpdate({_id: req.params.id }, req.body,{new: true} ,(error, usuario) =>{
        if(error){
            res.send(error);
        }
        let resposta = {
            mensagem: 'Seu usuario foi atualizado',
            data : usuario
        }
        res.send(resposta);
    })
}

exports.deletar = (req,res) => {
    Usuario.remove({_id: req.params.id}, (error, usuario) => {
        if(error){
            res.send(error);
        }
        let resposta = {
            mensagem: 'Usuario deletado',
            data: usuario
        }
        res.send(resposta);
    })
}