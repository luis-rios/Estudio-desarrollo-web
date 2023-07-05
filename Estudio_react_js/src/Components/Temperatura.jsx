import {useState} from "react";

const Temperatura =()=>{
  const [temperatura,setTemperatura] = useState(19)

  const aumentarTemperatura = ()=>{
    setTemperatura(temperatura + 2)
  }
  const reducirTemperatura = ()=>{
    setTemperatura(temperatura - 2)
  }
  return (
    <>
      <h2 className="mt-5">La temperatura es : {temperatura}</h2>
      <p>
        {temperatura>21?"Hace calorcito":"Hace fresquito"}
      </p>
      <button className="btn btn-primary btn-block" onClick={aumentarTemperatura}>Aumentar temperatura</button>
      <button className="btn btn-success btn-block" onClick={reducirTemperatura}>Reducir temperatura</button>
    </>
  )
}
export default Temperatura;