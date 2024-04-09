const pessoas = {
    nome: 'Arthur',
    sobrenome: 'Mafra',
    idade: 24
};

console.log(pessoas.nome);
console.log(pessoas.sobrenome);
console.log(pessoas.idade);


function CriaPessoa(nome, sobrenome, idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

// function CriaPessoa(nome, sobrenome, idade){
// metodo simplificado quando parametros possuem o mesmo nome das caracteristicas do objeto
//     return{
//         nome,
//         sobrenome,
//         idade
//     };
// }

const pessoa2 = CriaPessoa('luiz', 'Otavio', 24);
const pessoa3 = CriaPessoa('Joao', 'Otavio', 24);
const pessoa4 = CriaPessoa('Jean', 'Otavio', 24);
const pessoa5 = CriaPessoa('Marcos', 'Silva', 24);
const pessoa6 = CriaPessoa('Laura', 'Moreira', 24);

console.log(pessoa2, pessoa3, pessoa4);


//funcao dentro d eobjeto = metodo

const Pessoal = {
    nome: 'Taiue',
    sobrenome: 'Mafra',
    idade: 20,

    fala() {
        console.log(`${this.nome} ${this.sobrenome}, Oi!, minha idade e ${this.idade}`)
    },
    
    incrementarIdade(){
        this.idade ++;
    }
};

console.log(Pessoal);

Pessoal.fala();
Pessoal.incrementarIdade();
Pessoal.fala();
