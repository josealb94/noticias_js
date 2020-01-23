import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';
//import axios from 'axios';

function App() {

  // Definir la categoria y noticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async() => {
      const country = 'us';
      const apiKey = '0baedc82ff664f2c82d59d3e96ad7fd5';
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${categoria}&apiKey=${apiKey}`;

      // instalando axios
      // const resultado = await axios.get(url);
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      console.log(noticias.articles);
      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
      <Header 
        titulo="Buscador de Noticias"
      />
      <div className="container white">
        <Formulario 
          guardarCategoria={guardarCategoria}
        />
      </div>
      <div className="container white">
        <ListadoNoticias 
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
