 let strings = ["aa"]

const arrayLongest=(array=>{
  let response=[]
  let temporal=[]
  array.map(item =>{temporal.push(item.length)})
  let soLongh= Math.max(...temporal)

  array.forEach((element,index,array) => {
    if(element.length===array[temporal.indexOf(soLongh)].length){
      response.push(element)
    }
  });
return console.log(response);
})
arrayLongest(strings) 
