import {useState,useEffect} from 'react';
import axios from "axios";

const Usuarios = () => {
  const [usuarios,setUsuarios] = useState([])

  const listaUsuarios = async()=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    const users = await response.data
    setUsuarios(users)
  }
  useEffect(()=>{
    listaUsuarios()
  },[])
  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ul>
        {usuarios.map(item => 
        <li key={item.id}>{item.name}</li>
        )}
      </ul>
    </div>
  );
};

export default Usuarios;