const Respuesta=(array)=>{
  let copia = [...array]
  let response=[]
  let contador=0;
  copia = copia.filter(item =>{return item!=-1}).sort((a,b)=>{return a-b})
  array.forEach((item,index)=>{
    if(item!=-1){
      response.push(copia[contador])
      contador+=1
    }else {
      response.push(item)
      
    }
  })
  return response
  
}
console.log(Respuesta([4, 2, 9, 11, 2, 16]));