/* Buscar duplicados: Escribir una función que encuentre los elementos duplicados en un
array y los devuelva en otro array */
function datosDuplicados(array){
  let repetidos=[]
  let resultado=[]
  array.map(items => {
    if(repetidos.includes(items))
    repetidos.push(items)
  })
  return duplicados
}
console.log(datosDuplicados(["jose","luis","luis","jose","marlon","yair","marlon"]));