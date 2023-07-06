import {useState} from "react";
import uniqid from "uniqid"
const ListadoNombres = ()=>{
  const [nombre,setNombre] = useState("")
  const [id,setId] = useState("")
  const [listaNombres,setListaNombres] = useState([])
  const [edicion,setEdicion] = useState(false)
  const [mensaje,setMensaje] = useState("")

  const borrarNombre=(id)=>{
    const newArray = listaNombres.filter(item => item.id !=id)
    setListaNombres(newArray)
  }
  const Editar = (item)=>{
    setEdicion(true)
    setNombre(item.nombre)
    setId(item.id)
  }
  const addName=(e)=>{
    e.preventDefault()
    if(!nombre.trim()){
      setMensaje("El campo nombre está vacio")
      return
    }
    const persona ={
      id:uniqid(), 
      nombre:nombre
    }
    setListaNombres([...listaNombres,persona])
    setNombre("")
    setMensaje("")
  }
  const editarNombre =(e)=>{
    e.preventDefault()
    if(!nombre.trim()){
      setMensaje("El campo nombre está vacio")
      return
    }
    const newArray=listaNombres.map(item => item.id == id ?{id:id,nombre:nombre}:item)
    setListaNombres(newArray)
    setNombre("")
    setId("")
    setEdicion(false)
    setMensaje("")
  }
  return(
    <div className="container">
      <h1>Aplicacion Crud Basica</h1>
      <div className="row">
        <div className="col">
          <h2>Listado de nombres</h2>
          <ul className="list-group mt-5">
            {
              listaNombres.map(item =>
              <li className="list-group-item mt-1" key={item.id}>{item.nombre}
                <button 
                  onClick={()=>{borrarNombre(item.id)}}
                  className="btn btn-danger float-end"
                >
                  Borrar
                </button>
                <button 
                  onClick={()=>{Editar(item)}}
                  className="btn btn-success float-end me-2"
                >
                  Editar
                </button>
              </li>
              )
            }

          </ul>
        </div>
        <div className="col">
          <h2>Formulario para añadir nombres</h2>
          <form onSubmit={edicion?editarNombre:addName}  className="form-group">
            <input 
              className="form-control mt-3" 
              placeholder="Introduce el nombre" 
              type="text" 
              value={nombre}
              onChange={(e)=>{setNombre(e.target.value)}}
            />
            <input 
              className="form-control btn btn-info mt-2" 
              value={edicion?"Editar nombre":"Registrar Nombre"} 
              type="submit" 
            />
          </form>
          {
            mensaje ? <p className="alert alert-danger mt-1 ">{mensaje}</p>:""
          }
        </div>
      </div>
    </div>
  )
}
export default ListadoNombres;