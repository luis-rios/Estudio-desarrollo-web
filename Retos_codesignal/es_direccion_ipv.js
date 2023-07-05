/* const solution=(string)=>{
  let newArray =string.split(".").map(item => {return parseInt(item)})
  console.log(newArray);
  return newArray.map(item =>{return item>255?false:true}).includes(false)?false:true 
}
console.log(solution("172.16.254.1")); */
/* const solution=(string)=>{
  let newArray =string.split(".").map(item => {return item==""||isNaN(item) || item>255?
    false: parseInt(item)})
  console.log(newArray.length);
  console.log(newArray);
  return newArray.length<4||newArray.includes(false) ? false:true
   
}
console.log(solution("1")); */
/* const solution =(string)=>{
  const expresion = /^ $/
}
console.log(solution(".1.192.255")); */

/* const solution =(string)=>{
  let secuencia= /^(25()()(){3} |[0-1]?)$/
}
console.log(solution("172.16.254.1")); */
function solution(s) {
  var  r=s.split(".")
  return r.length===4&&r.every(x=>x!=""&&!isNaN(x)&&x>=0&&x<256&&x!='00'&&r[0]!='01')
}
console.log(solution("01.16.254.254"));