/* Calculadora de factorial:
Escribir una función que calcule el factorial de un número entero dado*/
function Factorial(numero){
  let contador = 1
  let resultado=1
  while (numero>=contador){
    resultado = contador*resultado
    contador+=1    
  }
  return resultado
}
console.log(Factorial(9));

/* para resolverlo, se tiene que multiplicar el resultado optenido de cada multiplicacion, 
entre resultado y cada numero que hay del 1 hasta el numero factorial
*/