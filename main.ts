class Pessoa{
    protected _nome : String='';
    public nascimento: Date = new Date();
    get nome() : String{return this._nome;}
    set nome(nome : String) {this._nome=nome;}}
    class Professor extends Pessoa{
    public area: String = '';
    public chamar():String {return this._nome;}}
    class Aluno extends Pessoa{
    public matricula : bigint=0n;}
    let p : Professor = new Professor();
    p.nome='Xavier';
    //console.log(p._nome);
    console.log(p.chamar());