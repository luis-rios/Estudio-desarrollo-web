/*La funcion test nos permite verificar si una cadena de texto
cumple las condiciones de una EXPRESION REGULAR 

EXPRESION REGULAR: también conocida como regex, es una secuencia de caracteres
que define un patro de busqueda.

META CARACTERES Y CUANTIFICADORES: entre los más comunes estan...
'.' Cualquier carácter
'[]' Conjunto de caracteres
'{}' Cuantificador, especifica la cantidad de ocurrencias de un elemento:
  {n} coincidira con 'n' ocurrencias del elemento
  {n,} coincidira con almenos 'n' ocurrencias del elemento
  {n,m} coincidira con al menos 'n' y hasta 'm' ocurencias del elemento
'^' Inicio de la secuencia
'$' Final de la secuencia
'\' Caracteres especiales o secuencia de escape
'*' Cero o mas veces
'+' Uno o más veces
'?' Uno o cero veces 
SECUENCIAS DE ESCAPE: 
'\d' cualquier numero del 0 al 9
'\w' cualquier caracter alfanumerico(letras/numeros) o un guion bajo '_'
'\s' espacio en blanco, espacios, tabulaciones y saltos de linea
'\t' tabulación 
'\n' salto de linea
'\\' representa caracter de barra invertida en si mismo

/* Ejemplo #1._ creamos una expresion que avarca de inicio "^" a fin "$"
busca que el string contenga un numero del 0 al 9 "\d" una o más veces "+" */

const expresionRegular = /^\d+$/
let textoPrueba = "123543"
console.log(expresionRegular.test(textoPrueba));
/* --------------------------------------------------------------------------- */
/* ejemplo #2_ Expresion que busca encontrar almenos 3 caracteres '{3}' de un 
rango del 0 al 9 '\d' seguidos de un guion '-' y encontrar 2 caracteres '{2}'
de un ranfo del 0 al 9 '\d'*/

const expresionEjemplo2 = /\d{3}-\d{2}/
console.log(expresionEjemplo2.test("123-45"));
/* --------------------------------------------------------------------------- */
/* Ejemplo #3_ Expresion que busca encontrar de inicio a fin del string '^','$' 
uno o más digitos '+' de un conjunto de caracteres '[]' de entre 0 y 9*/
const expresionEjemplo3 = /^[0-9]+$/
console.log(expresionEjemplo3.test("12345"));
/* --------------------------------------------------------------------------- */