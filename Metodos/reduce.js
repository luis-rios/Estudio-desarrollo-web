const person = [{
  nombre:"luis",
  apellido:"rios",
  puesto:"developer",
  sexo:"masculino",
  edad:26
},
{
  nombre:"yair",
  apellido:"miranda",
  puesto:"developer",
  sexo:"masculino",
  edad:28
},
{
  nombre:"laura",
  apellido:"rios",
  puesto:"developer",
  sexo:"femenino",
  edad:27
},
{
  nombre:"mia",
  apellido:"sanchez",
  puesto:"backend",
  sexo:"femenino",
  edad:32
}]
/* Manera convencional de usar un for  con acumulador */

/* let sumaEdad=0;
for(let i=0; i<person.length;i++){
  sumaEdad+=person[i].edad
}
console.log(sumaEdad); */

/*Usando reduce con acumulado de forma declarativa, se coloca dentro de los parametros
el aculumador y el array con el que se va a trabajar y se convierte tambien en cada uno
de los elementos del array. al final de la funcion se inicializa
el valor del acunulador  */

/* #ejemplo 1 */
let resultado = person.reduce(function( acumulador,array){
  return acumulador+=array.edad
},0 /* valor inicial del acumulador */)
/* ---------------------------------------------------------------------- */

/* #ejemplo 2 */
let resultado2 = person.reduce((acumulador,array)=>acumulador+=array.edad,0)
/* ---------------------------------------------------------------------- */

/* #ejemplo 3 */
let resultado3 = person.reduce(function(acumulador,array){
  return Array.from(new Set([...acumulador,array.puesto]))
},[])
/* En este ejemplo estamos obteniendo la suma de todos los puestos que hay dentro
del array, sin repetirlos y almacenandolos en un nuevo array usando spred operator 
para almacenarlos en conjunto mas cada puesto. 
La funcion set permite almacenarlos sin que se repitan pero devuelve un objeto.
La funcion Array.from permite crear y devolver en formato de array */
/* ---------------------------------------------------------------------- */

/* console.log(resultado);
console.log(resultado2); */
console.log(resultado3);