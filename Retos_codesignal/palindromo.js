/* Dado un string, revisa si este es un palindromo. <un palindromo es aquel que se lee 
igual de derecha a izquierda, que de izquierda a derecha> */
const Palindromo=(string)=>{return string.split("").reverse().join("")===string?true:false}
console.log(Palindromo("abac"));