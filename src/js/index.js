

const ativoObrigatorio = document.querySelectorAll('.input');
const alerta = document.querySelectorAll('.alerta')
const botao = document.querySelector('.btn');

botao.addEventListener('click', function (event) {
    event.preventDefault();

    let todosPreenchidos = true;

    ativoObrigatorio.forEach(function (input) {
        if (input.value === "") {
            input.classList.add('ativo');
            const proximoElemento = input.nextElementSibling;
            if (proximoElemento.classList.contains('alerta')) {
                proximoElemento.classList.add('verificado');
            }
            todosPreenchidos = false;
        } else {
            input.classList.remove('ativo');
            const proximoElemento = input.nextElementSibling;
            if (proximoElemento.classList.contains('alerta')) {
                proximoElemento.classList.remove('verificado');
            }
        } 
    });

    if (todosPreenchidos) {
        ativoObrigatorio.forEach(function (input) {
            input.classList.add('correto');
        });
    }
});