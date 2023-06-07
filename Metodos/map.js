const person = [{
  nombre:"luis",
  apellido:"rios",
  edad:32,
  salario:18000
  },{
  nombre:"yair",
  apellido:"miranda",
  edad:22,
  salario:12000
  },{
  nombre:"luis",
  apellido:"rios",
  edad:24,
  salario:14000
  },
]
function Usuarios(array){
  let retusultado = array.map(item =>{
    return {
      ...item,
      salario:29000 /* esta retornando un nuevo objeto por cada objeto denteo del array,
      haciendo una copia del array y modificando el salario de todos los objetos
      */
    }
  })
  return retusultado
}
console.log(Usuarios(person));