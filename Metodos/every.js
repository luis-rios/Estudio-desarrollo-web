/* El metodo every verifica que todos los elementos de un array cumplan con una conficion */
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
  nombre:"laurai",
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
/* #1_ Ejemplo: verificamos que todos los empleados tengan más de 20 años */
let resultado = person.every(item=>item.edad>20)
console.log(resultado);

/* ------------------------------------------------------------------------------- */
/* #2 Ejemplo: verificar si en el nombre de los empleados todos incluyan una "I" */
console.log(person.every(item=>item.nombre.includes('i')));
/* ------------------------------------------------------------------------------- */