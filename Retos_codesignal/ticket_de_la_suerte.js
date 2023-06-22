const Solucion =(n)=>{
  let numero0 = n.toString().split("")

  numero0 = numero0.map(item => parseInt(item))
  
  let numero1 = numero0.slice(0,Math.round(numero0.length/2))
  let numero2 = numero0.slice(Math.round( numero0.length/2),numero0.length)

  numero1 = numero1.reduce((acumulador,item)=>{return acumulador+=item})
  numero2 = numero2.reduce((acumulador,item)=>{return acumulador+=item})
  
  console.log(numero1,numero2);

return numero1 === numero2?true:false
}
console.log(Solucion(10));