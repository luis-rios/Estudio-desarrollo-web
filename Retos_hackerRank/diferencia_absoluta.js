/* const solution =(array)=>{
  let result=0;
  let suma1=0;
  let suma2=0;
  
  for(let primero=0;primero<array.length;primero++){
    for(let segundo=0;segundo<array.length;segundo++){
      suma1+=array[primero][segundo]
      primero+=1
    }
  }
  for(let i=0;i<array.length;i++){
    for(let e=array.length-1;e>=0;e--){
      console.log(`${i},${e}`);
      suma2+=array[i][e]
      i+=1
    }
  }
  return Math.abs(suma1-suma2)
}
console.log(solution([[1,2,3],[4,5,6],[9,8,9]])); */
const solution =(array)=>{
  let suma1=0;
  let suma2=0;
  for(let i=0;i<array.length;i++){
    suma1+=array[i][i]
    suma2+=array[i][array.length-1-i]
  }
  return Math.abs(suma1-suma2)
}
console.log(solution([[1,2,3],[4,5,6],[9,8,9]]));