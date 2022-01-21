import validator from './validator.js';

//console.log(validator);

//Guardar el numero ingresado en una constante  
const guardarNumero = document.getElementById('numero_tarjeta');
const boton = document.getElementById("boton");
const parrafo =document.createElement("p");
const mensaje= document.getElementById("mensaje");

const numero_final = document.getElementById("numero_final");
const nuevaTarjeta= document.createElement("p");


function guardar() {
    if (validator.isValid(guardarNumero.value) == true){
        let mensajeValido= document.createTextNode("Tarjeta Valida");
        parrafo.appendChild(mensajeValido);
        mensaje.appendChild(parrafo);
    }
    else {
        let mensajeValido= document.createTextNode("Tarjeta Invalida");
        parrafo.appendChild(mensajeValido);
        mensaje.appendChild(parrafo);
    }
    const oculto= validator.maskify(guardarNumero.value);
    nuevaTarjeta.innerHTML=`<p class="numero" id="numero_final">${oculto}</p>`;
    numero_final.parentNode.replaceChild(nuevaTarjeta, numero_final);

}


boton.addEventListener("click", guardar);




