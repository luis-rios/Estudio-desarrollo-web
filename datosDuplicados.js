/* Buscar duplicados: Escribir una función que encuentre los elementos duplicados en un
array y los devuelva en otro array */
function datosDuplicados(array){
  let duplicados=[];
  let contador=0;
  for (let index = 0; index < array.length; index++) {
    for (let index2 = 0; index2 < array.length; index2++) {
      if(array[index]===array[index2])
        contador++
        if (contador>1) {
          duplicados.push(array[index])
          array.splice(0,array[index])
          contador=0
        }
    }
    
  }
  return duplicados
}
console.log(datosDuplicados(["jose","luis","luis","jose","marlon","yair","marlon"]));