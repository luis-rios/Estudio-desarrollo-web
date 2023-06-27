/* const solution=(string)=>{
  let newArray =string.split(".").map(item => {return parseInt(item)})
  console.log(newArray);
  return newArray.map(item =>{return item>255?false:true}).includes(false)?false:true 
}
console.log(solution("172.16.254.1")); */
const solution=(string)=>{
  let newArray =string.split(".").map(item => {return parseInt(item)})
  console.log(newArray.length);
  console.log(newArray);
  return newArray.map(item =>{return item>255||isNaN(item)?false:true}).includes(false)?false:true 
}
console.log(solution("1.16.254.1oifjidfj"));