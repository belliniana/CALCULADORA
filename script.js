let resultado = document.getElementById('resultado');
let expressao = '';

function calcular(valor) {
    expressao += valor;
    resultado.value = expressao;
}

function igual() {
    try {
        resultado.value = eval(expressao);
        expressao = ''; 
    } catch (error) {
        resultado.value = 'Erro';
        expressao = ''; 
    }
}

function limpar() {
    expressao = '';
    resultado.value = '';
}