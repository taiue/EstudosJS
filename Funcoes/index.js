function saudacao(nome){
    console.log(`Bom dia ${nome}`);

    return `Bom dia ${nome}`;
}

var nome = "Roberto"
const alunos = ['luis', 'maria', 'joao'];

alunos.forEach((alunos) => saudacao(alunos));

saudacao(nome); 

const variavel = saudacao("Luiz");
console.log(variavel);


function soma(x, y){
    const resultado = x +y;

    return resultado;
}

console.log(soma(1, 2));


const raiz = function (n){
    return n ** 0.5;
};

console.log(raiz(4));

const arrow = n => n ** 0.5;

console.log(arrow(9));
