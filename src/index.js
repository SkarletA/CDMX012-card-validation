import validator from './validator.js';

//console.log(validator);

//Guardar el numero ingresado en una constante  
const guardarNumero = document.getElementById('numero_tarjeta');
const validar=document.getElementById("volver_a_validar");
const boton = document.getElementById("boton");
const mensaje=document.getElementById("mensaje");

const nuevaTarjeta= document.createElement("p");
const numero_final = document.getElementById("numero_final");
const btnHistoria= document.querySelector(".btn-historia");
const historia= document.querySelector(".resena-historica");





function guardar() {

    if (validator.isValid(guardarNumero.value) == true){
        document.getElementById("valido").innerHTML="Tarjeta Valida";
    }
    else {
        document.getElementById("valido").innerHTML="Tarjeta Invalida";

    }
    mensaje.classList.add("show");
    boton.disabled=true;

    const oculto= validator.maskify(guardarNumero.value);
    nuevaTarjeta.innerHTML=`<p class="numero" id="numero_final">${oculto}</p>`;
    numero_final.parentNode.replaceChild(nuevaTarjeta, numero_final);

}


boton.addEventListener("click", guardar);

validar.addEventListener("click", guardar);

btnHistoria.addEventListener("click", ()=>{
    historia.classList.add("mostrar");

})






