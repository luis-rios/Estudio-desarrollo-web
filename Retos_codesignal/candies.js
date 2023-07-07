const solution =(n,m)=>{
  let candy = Math.trunc(m/n)
  return candy*n
}
console.log(solution(2,10));