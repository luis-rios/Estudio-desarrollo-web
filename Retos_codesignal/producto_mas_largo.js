/* Dado un array de enteros, encuentra el pad de elementos adyacentes que tengan
el producto más largo y retorna el producto */
const productoMasLargo=(array)=>{
let operacion=Number.NEGATIVE_INFINITY
  array.forEach((item,index,array)=>{
    if(item*array[index+1]>operacion){
      operacion=array[index + 1]*item
    }
    
    
  })
  return operacion
}
console.log(productoMasLargo([-23, 4, -3, 8, -12]));
/* 3, 6, -2, -5, 7, 3 */