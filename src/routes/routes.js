module.exports = function(app) {
	const Jogos = require('../controllers/JogosController');
	const Usuario = require('../controllers/UsuarioController');
	const Denuncia = require('../controllers/denunciaController');
	const Sugestao = require('../controllers/sugestaoController');
  
	//Jogos
	//Criação de um jogo
    app.route('/cadastrarJogos')
	.post(Jogos.criar);

	//Apresentação da listas de jogos
	app.route('/listarJogos')
	.get(Jogos.listar);

	//Apresentação de um jogo
	app.route('/listarJogosId/:id')
	.get(Jogos.listarId);

	//Atualização de um jogo
	app.route('/atualizarJogos/:id')
	.put(Jogos.atualizar);

	//Exclusão de um jogo
	app.route('/deletarJogos/:id')
	.delete(Jogos.deletar);



	//Usuário
	//Criação de um usuário
	app.route('/cadastrarUsuario')
	.post(Usuario.criar);

	//Apresentação da listas de usuários
	app.route('/listarUsuario')
	.get(Usuario.listar)

	//Atualização de um usuário
	app.route('/atualizarUsuario/:id')
	.put(Usuario.atualizar);

	//Exclusão de um usuário
	app.route('/deletarUsuario/:id')
	.delete(Usuario.deletar);


	//Denúncia
	//Criação de uma denúncia
	app.route('/cadastrarDenuncia')
	.post(Denuncia.criar);

	//Apresentação da listas de denúncias
	app.route('/listarDenuncia')
	.get(Denuncia.listar)

	//Atualização de uma denúncia
	app.route('/atualizarDenuncia/:id')
	.put(Denuncia.atualizar);

	//Exclusão de uma denúncia
	app.route('/deletarDenuncia/:id')
	.delete(Denuncia.deletar);


	//Sugestão
    //Criação de uma Sugestão
    app.route('/cadastrarSugestao')
    .post(Sugestao.criar);

    //Apresentação da listas de Sugestao
    app.route('/listarSugestao')
    .get(Sugestao.listar);

    //Atualização de uma Sugestao
    app.route('/atualizarSugestao/:id')
    .put(Sugestao.atualizar);

    //Exclusão de uma Sugestao
    app.route('/deletarSugestao/:id')
    .delete(Sugestao.deletar);

  };

