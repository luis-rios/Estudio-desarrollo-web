import React from 'react';
import {useParams} from "react-router-dom";

const Home = () => {
  const {nombre} = useParams()
  return (
    <div className='container'>
      <h1>pagina de inicio</h1>
      <h2>{nombre}</h2>
    </div>
  );
};

export default Home;