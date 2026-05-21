let pantalla = document.getElementById('pantalla');
let valorActual = '0';
let valorAnterior = '';
let operacion = null;
let nuevaOperacion = false;

function actualizarPantalla() {
    pantalla.textContent = valorActual;
}

function agregarNumero(numero) {
    if (nuevaOperacion) {
        valorActual = numero;
        nuevaOperacion = false;
    } else {
        valorActual = valorActual === '0' ? numero : valorActual + numero;
    }
    actualizarPantalla();
}

function agregarOperacion(op) {
    if (operacion !== null) calcular();
    valorAnterior = valorActual;
    operacion = op;
    nuevaOperacion = true;
}

function calcular() {
    if (operacion === null) return;
    
    let resultado;
    const anterior = parseFloat(valorAnterior);
    const actual = parseFloat(valorActual);

    switch(operacion) {
        case '+': resultado = anterior + actual; break;
        case '-': resultado = anterior - actual; break;
        case '*': resultado = anterior * actual; break;
        case '/': 
            resultado = actual !== 0 ? anterior / actual : 'Error';
            break;
    }

    valorActual = resultado.toString();
    operacion = null;
    nuevaOperacion = true;
    actualizarPantalla();
}

function limpiar() {
    valorActual = '0';
    valorAnterior = '';
    operacion = null;
    nuevaOperacion = false;
    actualizarPantalla();
}

function borrarUno() {
    if (valorActual.length > 1) {
        valorActual = valorActual.slice(0, -1);
    } else {
        valorActual = '0';
    }
    actualizarPantalla();
}

// Inicializar
actualizarPantalla();