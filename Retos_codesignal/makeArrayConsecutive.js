function solution(statues) {
  var cont =0;
  for(let i = Math.min(...statues);i<Math.max(...statues);i++){
      if(!statues.includes(i)){
          cont+=1
      }
  }
  return cont
}