const Solution = (n,f)=>{
  let mitad = n/2
  let contrario = mitad + f
  if(contrario>=n){
    contrario-=n
  }
  return contrario
}
console.log(Solution(6,3));
/* Considere los números enteros de 0 a n - 1 escritos a lo largo del círculo 
de tal manera que la distancia entre dos números vecinos cualesquiera sea igual 
(tenga en cuenta que 0 y n - 1 también son vecinos).
Dados n y primerNúmero, encuentre el número que está escrito en la posición 
radialmente opuesta a primerNúmero. */

//explicacion, hay un circulo de 10 numeros iniciando por el 0, en total seria un reloj
//con numeros del 0 al 9. Para calcular el opuesto al primerNumero, se divide en 2 el 
//total de numeros que son 10/2, y le sumamos el primerNumero, si la suma es igual o 
//excede la cantidad de numeros en el reloj, le restamos 10 osea la cantidad total
//de numeros para que nos de el opuesto al primerNumero
//ejemplo: para n=10,primerNumero=7, el opuesto de 7 seria=12: 10/2 = 5 + 7=12
//como excede la cantidad de n=10, le restamos los 10: 12-10=2. opuesto =2