/* #1_ Suma de elementos: Dado un array de números, utiliza "forEach" para 
sumar todos los elementos y mostrar el resultado por consola, */

const numeros = [2, 4, 6, 8, 10];
function sumadeElementos(array){
  let resultado = 0; 
  array.forEach((item,index,array)=>{
    resultado += array[index]
  })
  return resultado
}
console.log(sumadeElementos(numeros));
/* ----------------------------------------------------------------------- */
/* #2_ Imprimir elementos en mayusculas: Dado un array de palabras, utiliza "forEach" 
para imprimir cada palabra en mayúsculas*/

let array = ["hola","comida","dalud","desayuno"]
function palabraMayusculas(array){
  array.forEach(function(item,index,array){
    console.log(array[index].toUpperCase());
  })
}
palabraMayusculas(array)
/* ----------------------------------------------------------------------- */

/* #3_ Filtrar elementos pares: Dado un array de números utiliza "forEach" para filtrar
los elementos pares y mostrarlos por consola */
let arrayNumeros=[3,5,2,9,12,17,6]
const filtradoNumeros=(array)=>{
  array.forEach((numero,index,array)=>{
    if(numero%2===0){console.log(array[index]);}
  })
}
filtradoNumeros(arrayNumeros)

/* ----------------------------------------------------------------------- */