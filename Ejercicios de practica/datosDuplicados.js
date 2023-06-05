/* Buscar duplicados: Escribir una función que encuentre los elementos duplicados en un
array y los devuelva en otro array */
function datosDuplicados(array){
  let duplicados=[]
  array.forEach(function(elemento,index,array){
    if(array.indexOf(elemento)!=index){
      duplicados.push(elemento)
    }
  });
  return duplicados
}
console.log(datosDuplicados(["jose","luis","luis","jose","marlon","yair","marlon"]));