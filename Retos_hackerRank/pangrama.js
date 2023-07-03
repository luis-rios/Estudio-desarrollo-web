const solution =(string)=>{
  let abc="a b c d e f g h i j k l m n o p q r s t u v w x y z".split(" ")
  let re=0
  string = string.replace(/\s/g,"").toLowerCase().split("")
  console.log(string);
  abc.forEach(element => {
    if(string.includes(element)){
      re+=1
    }
  });
  console.log(`${re},${abc.length}`);
  return re==abc.length?"pangram":"not pangram"
}
console.log(solution("hola  mundo "));
/* const solution =(string)=>{
  let expresion=/^[a-zA-z]+\s$/
  return expresion.test(string)?"pangram":"not pangram"
}
console.log(solution("hola ")); */