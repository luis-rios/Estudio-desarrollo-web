/* Esta prueba consiste en escribir un pequeño programa que imprima los números 
del 1 al 100, pero que cuando el número sea múltiplo de 3, imprima la palabra “Fizz”; 
para múltiplos de 5 deberá imprimir “Buzz”, finalmente cuando el número sea múltiplo 
de 3 y de 5, deberá imprimir “FizzBuzz”. */
const fizzBuzz=()=>{
  let response=[]
  for(let i=1;i<=100;i++){
    if(i%3===0&&i%5===0){
      console.log(i,": FizzBuzz")
    }else if(i%3===0){
      console.log(i,": Fizz")
    }else if(i%5===0){
      console.log(i,": Buzz")
    }
  }
}
fizzBuzz()