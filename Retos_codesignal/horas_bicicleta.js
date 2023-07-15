const solution=(n)=>{ 
  let hora = Math.trunc(n/60).toString()
  let minutos = n-(hora *60).toString()
  let resultado =( hora + minutos ).split("").map(item =>{return parseInt(item)}).reduce((acum,item)=>{return acum+=item})
  return resultado
}
console.log(solution(808));