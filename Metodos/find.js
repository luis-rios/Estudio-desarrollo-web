/* El metodo find nos permite encontrar el primer elemento dentro de un array */
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
/* #1_ ejemplo: Encontrar dentro del array la persona con el puesto de backend*/
let resultado = person.find((elemento)=>{return elemento.puesto==="backend"})
console.log(resultado);
/* -------------------------------------------------------------------------------- */
/* #2_ ejemplo: Encontrar a la persona con el nombre luis */
console.log(person.find(elemento=>{return elemento.nombre==="luis"}));
/* -------------------------------------------------------------------------------- */
/* #3_ jemplo: encontrar a una persona con edad mejor a 30 */

let result = person.find(function(elemento){
  if(elemento.edad>30){
    return 1
  }
})

console.log("3: ",result );