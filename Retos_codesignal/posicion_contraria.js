const Solution = (n,f)=>{
  let mitad = n/2
  let contrario = mitad + f
  if(contrario>=n){
    contrario-=n
  }
  return contrario
}
console.log(Solution(6,3));