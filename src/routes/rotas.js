module.exports = function(app) {
	const Jogos = require('../controllers/JogosController');
	const Usuario = require('../controllers/UsuarioController');
  
	//Jogos
	//Criação de um jogo
    app.route('/cadastroJogos')
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
	app.route('/criarUsuario')
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

  };

