import {useState,useEffect} from "react";

const PromesaFetch =()=>{
  const [usuarios,setUsuarios] = useState([])
  /* const obtenerUsuarios = async ()=>{
    try{
      const reponse = await fetch("https://jsonplaceholder.typicode.com/users/")
      const data = await reponse.json()
      setUsuarios(data)
    }catch(e){
      console.log(e.code);
    }
  } */
  useEffect(()=>{
    /* obtenerUsuarios() */
    fetch("https://jsonplaceholder.typicode.com/users/")
    .then(response => response.json())
    .then(data => setUsuarios(data))
    .catch(e => console.log(e.code))
    
  },[])
  return (
    <>
      {usuarios.map(item =>
        <p>{item.name}</p>  
      )}
    </>
  )
}
export default PromesaFetch;