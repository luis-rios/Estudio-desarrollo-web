const solution = (st1, st2) => {
  let array1 = st1.split("").sort();
  let array2 = st2.split("").sort();
  console.log(array1,"\n",array2);
  let minimo = array2.length<array1.length?array2:array1  /* numero de repeticiones */
  let maximo = array1.length>array2.length?array1:array2 /* sobre el que se eliminan los elementos */
  let contador = 0;
    minimo.forEach((item,index)=>{
      if(maximo.includes(item)){
        contador++
        maximo.splice(maximo.indexOf(item),1)        
      }
    })
  
  return contador;
};
console.log(solution("aabcc", "adcaa"));

