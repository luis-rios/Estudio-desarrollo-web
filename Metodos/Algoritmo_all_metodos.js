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
/* #1_ Hacer un algoritmo utilizando los metodos ya utilizados map,filter,sort,reduce */
let resulado=person.map(({nombre,apellido,edad,sexo})=>({
  trabajador: `${nombre} ${apellido}`,
  edad,
  sexo
}))
.filter(item=>item.edad>18)
.sort((a,b)=>a.edad-b.edad)
.reduce((acum,item)=>acum + item.edad,0)
console.log(resulado);
/* ---------------------------------------------------------------------------------- */
