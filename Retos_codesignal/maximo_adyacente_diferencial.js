const solution=(array)=>{
  let result=[]
  let ordenamiento=[]
  for(let i=0;i<array.length-1;i++){
    ordenamiento[i]=[array[i],array[i+1]].sort((a,b)=>{return a-b}).reverse()
    console.log(ordenamiento);
    result[i] = ordenamiento[i][0]-ordenamiento[i][1]
  }
  console.log(result);
  return Math.max(...result)
}
console.log(solution([-1,4,10,3,-2]));

