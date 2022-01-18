const validator = (numero) => {
  
  let longitud = numero.length;
  let array = [];
  
  for (let i = 0; i <= longitud-1; i++) {
      array.push(parseInt(numero[i]));
  };
  let array1= array.reverse();
  let mod = 0
  let div = 0

  for (let i = 0; i <= longitud-1; i++) {

    if ((i % 2) == 0){
      array1[i] = array1[i]*2;

      if (array[i] >= 10) {
        mod = array1[i] % 10;
        div = Math.floor(array1[i] / 10);
        array1[i] = mod + div;
        
      }
    }
  }
  
  let acum = 0
  for ( let i = 0; i<=longitud-1; i++){
    acum = acum + array1[i];

  }
  alert(acum);
};

export default validator;
