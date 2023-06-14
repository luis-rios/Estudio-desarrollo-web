function solution(sequence) {
  let cont =0;
  for(let i = 0; i< sequence.length-1;i++){
      
      if(sequence[i]>=sequence[i+1]&&sequence[i]<sequence[i+2]){
          sequence.splice(i+1,1)
          cont+=1
          i-=2
      }
      else if(sequence[i]>=sequence[i+1]&& i+1 ==sequence.length-1){
          sequence.splice(i+1,1)
          cont+=1
          i-=2
      }
      else if(sequence[i]>=sequence[i+1]){
          sequence.splice(i,1)
          cont+=1
          i-=2
      }
      
      if(cont>1){
      return false
      }
  
  }
  return true
}
