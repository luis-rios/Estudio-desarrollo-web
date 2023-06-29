/* const solution = (yl,yr,fl,fr)=>{
  let me=[]
  let fri=[]
  me  [0] = (Math.max(yl,yr))
  me  [1] = (Math.min(yl,yr))
  fri [0] = (Math.max(fr,fl))
  fri [1] = (Math.min(fr,fl))
  me = me.map(item => {return item.toString()})
  fri = fri.map(item =>{return item.toString()})
  console.log(me,fri);
  return me.join("") == fri.join("")   
}
console.log(solution(10,14,14,10)); */
const solution=(yl,yr,fl,fr)=>{
  let me = [yl,yr].sort().join("")
  let friend = [fl,fr].sort().join("")
  console.log(me,friend);
}
console.log(solution(10,14,14,10));

