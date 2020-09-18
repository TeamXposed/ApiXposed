const chai = require('chai');
const expect = chai.expect;

const usuario = require('../src/controllers/UsuarioController');

//Realização dos testes
describe('Teste de API', () =>{
	it('Retornar uma mensagem de cadastro criado com sucesso para o usuário caio', () =>{
		expect(usuario.criar('caio')).to.equal(res.send('Seu usuário foi criado com sucesso'));
	})
})


