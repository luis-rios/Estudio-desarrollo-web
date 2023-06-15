const secuencia=[3, 5, 67, 98, 3]
const secuenciaMasLarga=(array)=>{
	let contador=0;
	let siclos=0
	while (siclos<=array.length-2){
		if(array[siclos]<array[siclos+1]){			
			siclos++
		}else if(siclos<array.length-2&&array[siclos]<array[siclos+2]){
			array.splice(siclos+1,1)
			contador+=1
			siclos=0
		}else if (siclos===array.length-2&&array[siclos]>=array[siclos+1]){
			array.splice(siclos+1,1)
			contador+=1
			siclos=0
		}else{
			array.splice(siclos,1)
			contador+=1
			siclos=0
		}
		if(contador>1||array.length<3){
			break
		}
	}
	return contador<2?true:false
}
console.log(secuenciaMasLarga(secuencia));