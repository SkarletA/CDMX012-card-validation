import validator from './validator.js';

console.log(validator);


(function(){
    
    const guardarNumero = document.getElementById('numero_tarjeta');
    
    const boton = document.getElementById("boton");
    const guardar = function() {
        
        let numero = guardarNumero.value;
        let longitud = numero.length;
        let array = [];
        
        for (let i = 0; i <= longitud-1; i++) {
            array.push(parseInt(numero[i]));
        };
        alert(array)
    };

    boton.addEventListener("click", guardar);
}())



