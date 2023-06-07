const objeto = {
  nombre:"luis",
  apellido:"rios",
  edad:28,
  skills: {
    lenguaje:["javascript","python","css3","html"],
  },
}

function readObject(object){
  return `El programador ${object.nombre} tiene habilidades en programacion como ${object.skills.lenguaje}`
}
console.log(readObject(objeto));