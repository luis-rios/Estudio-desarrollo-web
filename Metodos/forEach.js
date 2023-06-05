function datosRepetidos(array){
  let repetidos=[]
  array.forEach(function(item,index,array){
    if (array.indexOf(item)!=index){
      repetidos.push(item)
    }
  });
  return repetidos
}
console.log(datosRepetidos(["luis","yair","yair","jose","luis"]));