import validator from './validator.js';

console.log(validator);


(function(){
    
    const guardarNumero = document.getElementById('numero_tarjeta');
    
    const boton = document.getElementById("boton");
    const guardar = function() {
        alert(typeof(guardarNumero.value));
        
    };

    boton.addEventListener("click", guardar);
}())



