const numbers=[8,1,2,5,2];
const Secuencia=(array=>{
  let contador=0;
  let siclos=0;
  while(siclos<array.length&&contador<2){
     if(array[siclos]>=array[siclos+1]&&array[siclos+2]<=array[siclos]){
      array.splice(siclos,1)
      contador++
      siclos-=1
    }else if(array[siclos+2]==null&&array[siclos+1]<=array[siclos]&&array[siclos+2]>=array[siclos]){
      array.splice(siclos+1,1)
      contador++
      siclos-=1
    }

    
    else if(array[siclos]>=array[siclos+1]){
      array.splice(siclos+1,1)
      contador++
      siclos-=1
    }else{siclos++}
  }
  return contador<2?true:false
})
  
console.log(Secuencia(numbers))