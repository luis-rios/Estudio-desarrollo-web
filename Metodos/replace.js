/*El metodo replace() sirve para sustituir elementos 
dentro del array o eliminarlos*/
let string = "hola mundo"

let newString = string.replace(/mundo/g,"luis dev")//sustituye mundo-por luis dev
let numeros = "1245odifjoDf"
let newNumeros = numeros.replace(/[a-zA-Z]/g,"")
console.log(newNumeros);