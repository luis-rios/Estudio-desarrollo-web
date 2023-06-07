const names = [{
  nombre:"luis",
  apellido:"rios",
  puesto:"developer",
  sexo:"masculino",
},
{
  nombre:"yair",
  apellido:"miranda",
  puesto:"developer",
  sexo:"masculino",
},
{
  nombre:"laura",
  apellido:"rios",
  puesto:"developer",
  sexo:"femenino",
},
{
  nombre:"mia",
  apellido:"sanchez",
  puesto:"backend",
  sexo:"femenino",
}]
function filtradoNombres(array){
   return resultado = array.filter(item=>item.sexo!=="masculino")
}
console.log(filtradoNombres(names));