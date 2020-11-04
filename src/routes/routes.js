module.exports = function (app) {
	const Jogos = require('../controllers/JogosController');
	const Usuario = require('../controllers/UsuarioController');
	const Denuncia = require('../controllers/denunciaController');
	const Sugestao = require('../controllers/sugestaoController');

	//Jogos
	//Criação de um jogo
	app.route('/jogo')
		.post(Jogos.criar);

	//Apresentação da listas de jogos
	app.route('/jogo')
		.get(Jogos.listar);

	//Apresentação de um jogo
	app.route('/jogo/:id')
		.get(Jogos.listarId);

	//Atualização de um jogo
	app.route('/jogo/:id')
		.put(Jogos.atualizar);

	//Exclusão de um jogo
	app.route('/jogo/:id')
		.delete(Jogos.deletar);



	//Usuário
	//Criação de um usuário
	app.route('/usuario')
		.post(Usuario.criar);

	//Apresentação da listas de usuários
	app.route('/usuario')
		.get(Usuario.listar)

	//Atualização de um usuário
	app.route('/usuario/:id')
		.put(Usuario.atualizar);

	//Exclusão de um usuário
	app.route('/usuario/:id')
		.delete(Usuario.deletar);
	
	//Pegar email
	app.route('/usuario/:email')
		.get(Usuario.getEmail)

	//Pegar senha
	app.route('/usuario/:senha')
		.post(Usuario.getSenha)


	//Denúncia
	//Criação de uma denúncia
	app.route('/denuncia')
		.post(Denuncia.criar);

	//Apresentação da listas de denúncias
	app.route('/denuncia')
		.get(Denuncia.listar)

	//Atualização de uma denúncia
	app.route('/denuncia/:id')
		.put(Denuncia.atualizar);

	//Exclusão de uma denúncia
	app.route('/denuncia/:id')
		.delete(Denuncia.deletar);


	//Sugestão
	//Criação de uma Sugestão
	app.route('/sugestao')
		.post(Sugestao.criar);

	//Apresentação da listas de Sugestao
	app.route('/sugestao')
		.get(Sugestao.listar);

	//Atualização de uma Sugestao
	app.route('/sugestao/:id')
		.put(Sugestao.atualizar);

	//Exclusão de uma Sugestao
	app.route('/sugestao/:id')
		.delete(Sugestao.deletar);

};

