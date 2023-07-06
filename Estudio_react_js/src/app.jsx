import Contador from "./Components/Contador";
import Listado from "./Components/Listado";
import Temperatura from "./Components/Temperatura";
import Formulario from "./Components/Formulario";
import ListadoNombres from "./Components/ListadoNombres";
import Home from "./Pages/Home";
import Base from "./Pages/Base";
import Usuarios from "./Pages/Usuarios";
import {BrowserRouter as Router,
  Route, Routes, Link
} from "react-router-dom";

export function App() {
  

  return (
    <Router> 
      <Link to ="/">Usuarios</Link>     
      <Link to ="/inicio">Inicio</Link>     
      <Routes>
        <Route exact path="/" element={<Usuarios/>}/>
        
      </Routes>
    </Router>
  )
}
