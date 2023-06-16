/* const secuencia=[3, 5, 67, 98, 3] */
/* const secuencia=[1,2,3,2,5] */
const secuencia=[1,3,2,1]
/* const secuencia=[8,1,2,3] */
const secuenciaMasLarga=(array)=>{
	let contador=0;
	let siclo=0;
	while (siclo<array.length-2){

		if()
		if(array[siclo]>=array[siclo+1]){
			array.splice(siclo,1)
		}
	}
	
	return contador<2?true:false
}
console.log(secuenciaMasLarga(secuencia));