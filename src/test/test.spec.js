const chai = require('chai');
const expect = chai.expect;

const usuario = require('../controllers/UsuarioController');
const jogo = require('../controllers/JogosController');
const sugestao = require('../controllers/sugestaoController');
const denuncia = require('../controllers/denunciaController');


//Realização dos testes
describe('Só retorna vogal', () =>{
	it('Descrição do teste aqui', () =>{
		expect(suafuncao('parametro')).to.equal(retorno);
	})
})


