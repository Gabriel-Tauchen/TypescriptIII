//HERANÇA
class Pessoa{
    
    protected _nome : String='';
    public nascimento: Date = new Date();
   
    get nome() : String{return this._nome;}
    set nome(nome : String) {this._nome=nome;}
}

class Professor extends Pessoa{
    public area: String = '';
    public chamar():String {return this._nome;}
}
class Aluno extends Pessoa{
    public matricula : bigint=0n;
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
class Relevo{
    constructor(public nome: String){}
    public temperatura():void{console.log("moderada");}
}
class Montanha extends Relevo{
    public altura:bigint=0n;
    constructor(nome:String){super(nome)}
}
class Planicie extends Relevo{
    public temLago: boolean=false;
    constructor(nome:String){super(nome)}
    public temperatura():void{ console.log("quente");}
}

let m : Montanha = new Montanha("Everest");
m.temperatura(); //frio
let p: Planicie = new Planicie("Planalto Central");
p.temperatura()
let r: Relevo = new Relevo("Acidentado");
r.temperatura();