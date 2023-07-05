import {useState} from "react";
const Formulario = ()=>{
  return (
    <div className="container">
      <h2>Nuestro primer formulario</h2>
      <form className="form-group">
        <input placeholder="Introduce el nombre" className="form-control mt-3" type="text" />
        <input placeholder="Introduce la edad" className="form-control mt-2" type="text" />
        <input className="btn btn-primary" type="submit" />
      </form>
    </div>
  )
}
export default Formulario;