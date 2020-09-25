const chai = require('chai'),
 expect = chai.expect
const chaihttp = require('chai-http')

chai.use(chaihttp)

const jogos = require('../src/controllers/JogosController')

describe('Criação do jogo', () => {
	it('Criação de jogo através do método post', function (done) {
		chai.request("http://localhost:3000")
			.post('/jogo')
			.send({ nome: "Vinicius", tipo: "ação", ano: "2020", descricao: "muito bom" })
			.end(function (err, res) {
				if (err) done(err);
				res.body.should.have.property('participant');
				res.body.participant.should.have.property('nuid', '98ASDF988SDF89SDF89989SDF9898');
			});
		done();
	});
});

describe('Listagem de Jogo', () => {
	it('Listagem de jogo através do método get', function (done) {
		chai.request("http://localhost:3000")
			.get('/jogo')
			.send({})
			.end(function (err, res) {
				if (err) done(err);
				res.body.should.have.property('participant');
				res.body.participant.should.have.property('nuid', '98ASDF988SDF89SDF89989SDF9898');
			});
		done();
	});
});

describe('Atualizar jogo a partir do id', () => {
	it('Atualizar jogo através do método put', function (done) {
		chai.request("http://localhost:3000")
			.put('/jogo/id')
			.send({id : "5f6947200a857d4550168075"})
			.end(function (err, res) {
				if (err) done(err);
				res.body.should.have.property('participant');
				res.body.participant.should.have.property('nuid', '98ASDF988SDF89SDF89989SDF9898');
			});
		done();
	});
});

describe('Deletar jogo a partir do id', () => {
	it('Deletar jogo através do método delete', function (done) {
		chai.request("http://localhost:3000")
			.delete('/jogo/id')
			.send({id : "5f6947200a857d4550168075"})
			.end(function (err, res) {
				if (err) done(err);
				res.body.should.have.property('participant');
				res.body.participant.should.have.property('nuid', '98ASDF988SDF89SDF89989SDF9898');
			});
		done();
	});
});