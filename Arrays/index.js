const nome = 'luiz';
console.log(nome[0]);

const alunos = ['luis', 'maria', 'joao'];

console.log(alunos.length);
alunos[alunos.length] = 'Fabio'; // descobre o tamanho do array e adiciona ao final

alunos.push('Otavio'); // Adiciona ao final do array.

console.log(alunos.slice(0, 3))

console.log(alunos[0]);

alunos[0] = 'Eduardo';
alunos[3] = 'Luiza';

alunos.unshift('Luiza') // Adiciona no inicio.

alunos.pop(); // remove do array
const removido = alunos.pop(); // salva removido para uma variavel
const removidoInicio = alunos.shift(); // remove do inicio
delete alunos[1]; // remove o dado mas o i existe vazio


console.log(alunos);