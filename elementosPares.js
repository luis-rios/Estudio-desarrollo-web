/* Ejercicio de filtrado de elementos pares: Escribe una función
 que tome un array de números y devuelva un nuevo array con solo los elementos pares. */
function Filtrado(array){
  let newArray = array.filter(datos=> datos%2===0)
  return newArray
}
console.log(Filtrado([1,2,3,4,5,6,7,8,9]));