import {useState} from "react";
const Formulario = ()=>{
  const [nombre,setNombre] = useState("")
  const [edad,setEdad] = useState("")
  const validarCampos=(e)=>{
    e.preventDefault()
    if(!nombre.trim()){
      console.log("El campo nombre está vacio");
    }
    if(!edad.trim()){
      console.log("El campo edad está vacio");
    }
  }
  return (
    <div className="container">
      <h2>Nuestro primer formulario</h2>
      <form onSubmit={validarCampos} className="form-group">
        <input 
          placeholder="Introduce el nombre" 
          className="form-control mt-3" 
          type="text"
          onChange={(e)=>{setNombre(e.target.value)}} 
        />
        <input 
          placeholder="Introduce la edad" 
          className="form-control mt-2" 
          type="text"
          onChange={(e)=>{setEdad(e.target.value)}} 
        />
        <input 
          className="btn btn-primary" 
          type="submit" 
        />
      </form>      
    </div>
  )
}
export default Formulario;