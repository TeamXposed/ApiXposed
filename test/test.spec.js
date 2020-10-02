const chai = require('chai'),
    expect = chai.expect
const chaihttp = require('chai-http')

chai.use(chaihttp)

// Teste de Jogo 

describe('Criação do jogo', () => {
    it('Criação de jogo através do método post', function (done) {
        chai.request("http://localhost:3000")
            .post('/jogo')
            .send({ nome: "Vinicius", tipo: "ação", ano: "2020", descricao: "muito bom" })
            .end(function (err, res) {
                if (err) done(err);
                res.body.should.have.property('jogo');
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
                res.body.should.have.property('jogo');
                res.body.participant.should.have.property('nuid', '98ASDF988SDF89SDF89989SDF9898');
            });
        done();
    });
});

describe('Atualizar jogo a partir do id', () => {
    it('Atualizar jogo através do método put', function (done) {
        chai.request("http://localhost:3000")
            .put('/jogo/id')
            .send({ id: "5f6947200a857d4550168075" })
            .end(function (err, res) {
                if (err) done(err);
                res.body.should.have.property('jogo');
                res.body.participant.should.have.property('nuid', '98ASDF988SDF89SDF89989SDF9898');
            });
        done();
    });
});

describe('Deletar jogo a partir do id', () => {
    it('Deletar jogo através do método delete', function (done) {
        chai.request("http://localhost:3000")
            .delete('/jogo/id')
            .send({ id: "5f6947200a857d4550168075" })
            .end(function (err, res) {
                if (err) done(err);
                res.body.should.have.property('jogo');
                res.body.participant.should.have.property('nuid', '98ASDF988SDF89SDF89989SDF9898');
            });
        done();
    });
});


// Teste de Usuário 

describe('Criação de usuário', () => {
    it('Criação de usuário através do método post', function (done) {
        chai.request("http://localhost:3000")
            .post('/usuario')
            .send({ nome: "caio", telefone: "81985230045", email: "teste1@gmail.com", senha: "teste", cpf: "15426414789" })
            .end(function (err, res) {
                if (err) done(err);
                res.body.should.have.property('usuario');
                res.body.participant.should.have.property('nuid', '98ASDF988SDF89SDF89989SDF9898');
            });
        done();
    });
});

describe('Listagem de Usuário', () => {
    it('Listagem de usuário através do método get', function (done) {
        chai.request("http://localhost:3000")
            .get('/usuario')
            .send({})
            .end(function (err, res) {
                if (err) done(err);
                res.body.should.have.property('usuario');
                res.body.participant.should.have.property('nuid', '98ASDF988SDF89SDF89989SDF9898');
            });
        done();
    });
});

describe('Atualizar usuário a partir do id', () => {
    it('Atualizar usuário através do método put', function (done) {
        chai.request("http://localhost:3000")
            .put('/usuario/id')
            .send({ id: "5f6947200a857d4550168075" })
            .end(function (err, res) {
                if (err) done(err);
                res.body.should.have.property('usuario');
                res.body.participant.should.have.property('nuid', '98ASDF988SDF89SDF89989SDF9898');
            });
        done();
    });
});

describe('Deletar usuário a partir do id', () => {
    it('Deletar usuário através do método delete', function (done) {
        chai.request("http://localhost:3000")
            .delete('/usuario/id')
            .send({ id: "5f6947200a857d4550168075" })
            .end(function (err, res) {
                if (err) done(err);
                res.body.should.have.property('usuario');
                res.body.participant.should.have.property('nuid', '98ASDF988SDF89SDF89989SDF9898');
            });
        done();
    });
});

// Teste de Denuncia

describe('Criação de denuncia', () => {
    it('Criação de denuncia através do método post', function (done) {
        chai.request("http://localhost:3000")
            .post('/denuncia')
            .send({ nome: "joel", assunto: "Denuncia", nick_denunciado: "Joel-Boladao", jogo: "CS-GO", descricao: "Usando rack para voar" })
            .end(function (err, res) {
                if (err) done(err);
                res.body.should.have.property('denuncia');
                res.body.participant.should.have.property('nuid', '98ASDF988SDF89SDF89989SDF9898');
            });
        done();
    });
});

describe('Listagem de denuncia', () => {
    it('Listagem de denuncia através do método get', function (done) {
        chai.request("http://localhost:3000")
            .get('/denuncia')
            .send({})
            .end(function (err, res) {
                if (err) done(err);
                res.body.should.have.property('denuncia');
                res.body.participant.should.have.property('nuid', '98ASDF988SDF89SDF89989SDF9898');
            });
        done();
    });
});

describe('Atualizar denuncia a partir do id', () => {
    it('Atualizar denuncia através do método put', function (done) {
        chai.request("http://localhost:3000")
            .put('/denuncia/id')
            .send({ id: "5f6947200a857d4550168075" })
            .end(function (err, res) {
                if (err) done(err);
                res.body.should.have.property('denuncia');
                res.body.participant.should.have.property('nuid', '98ASDF988SDF89SDF89989SDF9898');
            });
        done();
    });
});

describe('Deletar denuncia a partir do id', () => {
    it('Deletar denuncia através do método delete', function (done) {
        chai.request("http://localhost:3000")
            .delete('/denuncia/id')
            .send({ id: "5f6947200a857d4550168075" })
            .end(function (err, res) {
                if (err) done(err);
                res.body.should.have.property('denuncia');
                res.body.participant.should.have.property('nuid', '98ASDF988SDF89SDF89989SDF9898');
            });
        done();
    });
});

// Teste de Sugestão
describe('Criação de Sugestão', () => {
    it('Criação de Sugestão através do método post', function (done) {
        chai.request("http://localhost:3000")
            .post('/sugestao')
            .send({ nome: "teste", jogo: "CS", ano: "2018", descricao: "muito bom", comentario: "melhor jogo" })
            .end(function (err, res) {
                if (err) done(err);
                res.body.should.have.property('sugestao');
                res.body.participant.should.have.property('nuid', '98ASDF988SDF89SDF89989SDF9898');
            });
        done();
    });
});

describe('Listagem de Sugestões', () => {
    it('Listagem de Sugestões através do método get', function (done) {
        chai.request("http://localhost:3000")
            .get('/sugestao')
            .send({})
            .end(function (err, res) {
                if (err) done(err);
                res.body.should.have.property('sugestao');
                res.body.participant.should.have.property('nuid', '98ASDF988SDF89SDF89989SDF9898');
            });
        done();
    });
});

describe('Atualizar Sugestão a partir do id', () => {
    it('Atualizar Sugestão através do método put', function (done) {
        chai.request("http://localhost:3000")
            .put('/sugestao/id')
            .send({ id: "5f6947200a857d4550168075" })
            .end(function (err, res) {
                if (err) done(err);
                res.body.should.have.property('sugestao');
                res.body.participant.should.have.property('nuid', '98ASDF988SDF89SDF89989SDF9898');
            });
        done();
    });
});
describe('Deletar Sugestão a partir do id', () => {
    it('Deletar Sugestão através do método delete', function (done) {
        chai.request("http://localhost:3000")
            .delete('/sugestao/id')
            .send({ id: "5f6947200a857d4550168075" })
            .end(function (err, res) {
                if (err) done(err);
                res.body.should.have.property('sugestao');
                res.body.participant.should.have.property('nuid', '98ASDF988SDF89SDF89989SDF9898');
            });
        done();
    });
});