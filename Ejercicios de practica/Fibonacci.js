/* Generador de secuencia de Fibonacci: Crea una función que genere los primeros 
n números de la secuencia de Fibonacci.*/

function Fibonacci(){
  let anterior=0
  let actual=1
  let resultado=[1]
  let suma=0;
  function Calculo(suma){
    if(suma<233){
      suma=anterior+actual
      resultado.push(suma)
      anterior=actual
      actual=suma
      Calculo(suma)
    }
  }
  Calculo(suma)
  return resultado
}
console.log(Fibonacci());