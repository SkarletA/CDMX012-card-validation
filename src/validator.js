const validator = {
  isValid(numero){
    let longitud = numero.length;
    let array = [];
    // Llenar el array vacio
    for (let i = 0; i <= longitud-1; i++) {
        array.push(parseInt(numero[i]));
    }
    
    let array1= array.reverse(); //Invertir el array y guardarlo en una variable
    let mod = 0;
    let div = 0;

    //Recorrer el array
    for (let i = 0; i <= longitud-1; i++) {
    
      if (((i+1) % 2) == 0){ //Saber si la posicion es par o impar partiendo desde 1
        array1[i] = array1[i]*2;
        if (array[i] >= 10) { //Si el numero es mayor a 10 
          mod = array1[i] % 10;
          div = Math.floor(array1[i] / 10);
          array1[i] = mod + div;
          
        }
      }
    }
    
    let acum = 0;
    // Sumatoria de todos los elementos que estam en el array
    for ( let i = 0; i<=longitud-1; i++){
      acum = acum + array1[i];

    }
    //Saber si la tarjeta es valida o invalida
    if (acum%10==0){
      alert("Tarjeta Valida");
      return true;
      
    }
    else {
      alert("Tarjeta Invalida");
      return false;
    }

  },
  
  maskify(){}
};

export default validator;
