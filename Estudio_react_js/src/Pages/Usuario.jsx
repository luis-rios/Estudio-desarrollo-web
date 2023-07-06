import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

const Usuario = () => {

  const {id} = useParams()
  const [usuarioData,setUsuarioData] = useState([])

  const getUsuario = async()=>{
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await response.data
    console.log(response);
    setUsuarioData(data)
  }
  useEffect(()=>{
    getUsuario()
  },[])
  return (
    <div>
      <h1>Datos del usuario {usuarioData.name}</h1>
      <p>{usuarioData.name}</p>
      <p>{usuarioData.phone}</p>
      <p>{usuarioData.email}</p>
    </div>
  );
};

export default Usuario;