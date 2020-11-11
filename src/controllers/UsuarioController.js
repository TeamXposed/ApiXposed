const Usuario = require('../models/UsuarioModel')

// Criação das funcionalidades do usuário

exports.criar = async(req,res) => {
    const { nome, telefone, email, senha, cpf} = req.body
    const usuarioexis = await Usuario.find({email})
    console.log("Usuario=",usuarioexis)
    
    if(usuarioexis.length > 0){
        return res.status(400).send("Email já cadastrado!")
    }
    
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

exports.getSelect = async (req,res) => {
    const { email, senha } = req.body
    const user = await Usuario.findOne({email});
    console.log(user)
    
    if(senha !== user.senha){

        return res.status(401).send("senha incorreta")
    }

    return res.json({
        user:{
            email,
            senha
        }
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