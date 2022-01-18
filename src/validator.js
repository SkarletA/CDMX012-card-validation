const validator = (numero) => {
  
  let longitud = numero.length;
  let array = [];
  
  for (let i = 0; i <= longitud-1; i++) {
      array.push((numero[i]));
  };
  let array1= array.reverse();
  

  for (let i = 0; i <= longitud-1; i++) {
    if ((i % 2) == 0){
      array1[i] = array1[i]*2
    }
  }
  alert(array1);
  

};

export default validator;
