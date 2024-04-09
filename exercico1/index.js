function meuEscopo (){
    const form = document.querySelector('.form');

    form.addEventListener('submit', recebeEventoForm)

    function recebeEventoForm(evento){
    evento.preventDefault();
    console.log('form nao enviado');
    }
}


meuEscopo();