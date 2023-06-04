/* Contador de vocales: Crea una función que cuente la cantidad de vocales en 
una palabra o frase. */
function vocalRepetida(string){
  
  let array = string.split("")
  let array2=array.filter(vocal=> vocal==="a"||vocal==="e"||vocal==="i"||vocal==="o"||vocal==="u")
  return array2.length
}
console.log(vocalRepetida("hola amor"));