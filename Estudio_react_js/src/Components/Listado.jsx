import {Fragment, useState} from 'react';

const Listado = () => {
  const [numeros,setNumeros] = useState([1,2,3,4,5])
  return (
    <Fragment>
      <h1>Lista de numeros</h1>
      <ul>
        {
          numeros.map((item,index)=>
            <li key={index}>
              {item}-{index}
            </li>
          )
        }
      </ul>
    </Fragment>
  );
};

export default Listado;