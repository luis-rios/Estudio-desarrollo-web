let rooms = 
/* [[0,1,1,2],
[0,5,0,0],
[2,0,3,3]] */
[[1,1,1,0], 
 [0,5,0,1], 
 [2,1,3,10]]
const costOfRooms=(array=>{
  let response=0;
  for(let floor=0,building=array[floor].length; floor<building;floor++){
    for(let apartment=0,hallway=array.length; apartment<hallway;apartment++){
      if(array[apartment][floor]!=0){
        response+=array[apartment][floor]
      }else{
        break
      }
    }  
  }return response
})

console.log(costOfRooms(rooms));