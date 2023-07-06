import {useEffect,useState} from 'react';


const Base = () => {
  const [nombre,setNombre] = useState("Luis")
  useEffect(()=>{
    setTimeout(()=>{
      setNombre("Yair")
    },5000)
  },[])
  return (
    <div>
      <h1>pagina base/</h1>
      <h2>{nombre}</h2>
      
    </div>
  );
};

export default Base;