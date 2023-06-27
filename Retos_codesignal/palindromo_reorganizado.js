const soulution =(string)=>{
  let arrayPalindromo = string.split("")
  let copy = [...arrayPalindromo]  
  let response =[]
  let contador=0;
  for(let ciclo=0;ciclo <arrayPalindromo.length;ciclo++){
    
    if(copy.includes(arrayPalindromo[ciclo])){
      copy.splice(copy.indexOf(arrayPalindromo[ciclo]),1)
      response.splice(contador,0,arrayPalindromo[ciclo])
      if(copy.includes(arrayPalindromo[ciclo])){
        copy.splice(copy.indexOf(arrayPalindromo[ciclo]),1)
        response.splice((response.length-1)-contador,0,arrayPalindromo[ciclo])
      }
      contador++
    }if(copy.length==0){
      break
    }
  }
  console.log(response);
  return response.join("")===response.reverse().join("")
}
console.log(soulution("aabbc"));