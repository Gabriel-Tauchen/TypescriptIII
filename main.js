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
// let p : Professor = new Professor();
// p.nome='Xavier';
// //console.log(p._nome);
// console.log(p.chamar());
//Substitutibilidade
//Objeto subclasse se passa por um objeto da superclasse
// let p1 : Professor = new Professor();
// p1.area='banco de dados'
// let p2 : Pessoa = new Professor();
// (p2 as Professor).area='engenharia software'
// let p3 : Pessoa = new Aluno();
// (p3 as Aluno).matricula=202500001n;
// console.log(p1.area);
// console.log((p2 as Professor).area);
// console.log((p2 as Aluno).matricula); //It becomes undefined
// console.log((p3 as Aluno).matricula);
//Construtor
//Subclasse sempre invoca construtor superclasse
//Construtor Subclasse obriga invocação super()
// class Relevo{ 
//     constructor(public nome: String){}
// }
// class Planicie extends Relevo{
//     public temLago: boolean=false;
//     constructor(nome:String){super(nome)}
// }
// class Montanha extends Relevo{
//     public altura:bigint=0n;
//     constructor(nome:String){super(nome)}
// }
// let lista:Relevo[] = [];
// lista.push(new Relevo("sem nome"));
// lista.push(new Planicie("Pantanal"));
// lista.push(new Montanha("Everest"));
// lista.forEach((r) => console.log(r));
//Sobreposição de implementação
//Subclasse pode sobrepor com novas implementações as operações herdadas
class Relevo {
    constructor(nome) {
        this.nome = nome;
    }
    temperatura() { console.log("moderada"); }
}
class Montanha extends Relevo {
    constructor(nome) {
        super(nome);
        this.altura = 0n;
    }
}
class Planicie extends Relevo {
    constructor(nome) {
        super(nome);
        this.temLago = false;
    }
    temperatura() { console.log("quente"); }
}
let m = new Montanha("Everest");
m.temperatura(); //frio
let p = new Planicie("Planalto Central");
p.temperatura();
let r = new Relevo("Acidentado");
r.temperatura();
