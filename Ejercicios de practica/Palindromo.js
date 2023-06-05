/* Palíndromo: Escribir una función que verifique si una cadena de texto es un palindromo */
function Palindromo (string){  
  return string === string.split("").reverse().join("")?"Es palindromo":"No es palindromo"
}
console.log(Palindromo("aabaa"));