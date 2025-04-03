"use strict";
//HERANÇA
class Pessoa {
    constructor() {
        this._nome = '';
        this.nascimento = new Date();
    }
    get nome() { return this._nome; }
    set nome(nome) { this._nome = nome; }
}
class Professor extends Pessoa {
    constructor() {
        super(...arguments);
        this.area = '';
    }
    chamar() { return this._nome; }
}
class Aluno extends Pessoa {
    constructor() {
        super(...arguments);
        this.matricula = 0n;
    }
}
const cachorro = {
    nome: "Pluto",
    emitirSom() {
        console.log(`${this.nome} diz: Au au`);
    }
};
console.log("Objeto:", cachorro);
cachorro.emitirSom();
