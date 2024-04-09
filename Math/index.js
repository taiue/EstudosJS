const numero = Number(prompt('digite um numero:'));
var numeroTitulo = document.getElementById('numero-titulo');
var texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML += `<p>Seu numero -2 e ${numero - 2}</p>`;
texto.innerHTML += `raiz quadrada: ${Math.sqrt(numero)}`;
texto.innerHTML += `<p>${numero} e inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>${numero} e NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;

