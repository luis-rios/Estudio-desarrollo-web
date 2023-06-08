/* #1_ Suma de elementos: Dado un array de números, utiliza "reduce" para sumar 
todos los elementos y retornar el resultado */
let numeros =[2,5,17,42,12]
let resultado = numeros.reduce((acumulador,array)=>{
  return  acumulador+=array
},0)
console.log(resultado);
/* --------------------------------------------------------------------- */
/* #2_ Concatenación de strings: Dado un array de palabras, utiliza reduce
para concatenar todas las palabras y retornar el resultado como un solo string */
let arrayWords=["hola","mi","nombre","es","luis"]
let result = arrayWords.reduce(function(acumulador,array){
  return acumulador+=array
},[])
console.log(result);
/* --------------------------------------------------------------------- */
/* #3_ Calculo del valor maximo: Dado un array de números, utiliza "reduce"
para encontrar el valor maximo y retornarlo */
let arrayNumers = [102,12,17,3,57,1]
let valorMaximo = arrayNumers.reduce((acumulador,array)=>{
  if(acumulador<array){
    acumulador=array
  }
  return acumulador
},0)
console.log(valorMaximo);
/* --------------------------------------------------------------------- */