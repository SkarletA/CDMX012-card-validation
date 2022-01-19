import validator from './validator.js';

//console.log(validator);

//Guardar el numero ingresado en una constante  
const guardarNumero = document.getElementById('numero_tarjeta');
const boton = document.getElementById("boton");

function guardar() {
    validator.isValid(guardarNumero.value)
}

boton.addEventListener("click", guardar);




