//var visor = document.getElementById('result')

function botao(valor) {
    var salvo = document.calc.visor.value
    document.calc.visor.value = salvo + `${valor}`
}

function limpa_tela() {
    document.calc.visor.value = ''
}

function calcula() {
    let expr = document.calc.visor.value
    let resultado = eval(expr)
    document.calc.visor.value = resultado
}

function back_space(){
    numero = document.calc.visor.value
    bs_valor = numero.slice(0,-1)
    document.calc.visor.value = bs_valor
    
}