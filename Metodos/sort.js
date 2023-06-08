/* El metodo sort nos permite ordenar de manera alfabetica un array */

/* #1_ ejemplo: ordenando array de string alfabeticamente */
const words=["carlos","albert","luis","zara","julian"]
console.log(words.sort());
/* --------------------------------------------------------------------- */
/* #2_ ejemplo: ordenando array de numeros de menor a mayor*/
const ages=[13,2,74,28,18]
console.log(ages.sort((a,b)=>a-b));
/* --------------------------------------------------------------------- */
/* #3_ ejemplo: ordenando array de numeros de mayor a menor*/
const ages2=[13,2,74,28,18]
console.log(ages2.sort((a,b)=>b-a));
/* --------------------------------------------------------------------- */