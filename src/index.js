import validator from './validator.js';

console.log(validator);

    
const guardarNumero = document.getElementById('numero_tarjeta');
const boton = document.getElementById("boton");

function guardar() {
    validator(guardarNumero.value) 
};

boton.addEventListener("click", guardar);




