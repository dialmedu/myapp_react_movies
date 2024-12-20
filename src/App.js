import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './peliculas/css/layout.css';
import './peliculas/css/theme.css';
import MovieList from './peliculas/componentes/MovieList';
import PageHeader from './peliculas/componentes/PageHeader';
import PageNav from './peliculas/componentes/PageNav';

function App() {
  return (
    <div className="App dm_layout_panel dm_theme_movie">
      <PageHeader title="Peliculas" />
      <PageNav />
      <section className='dm_layout_panel__main scroll-bar'>
        <MovieList peliculas={[{id: 1, imageSrc: "https://es.web.img3.acsta.net/medias/nmedia/18/85/53/36/19820768.jpg", title: "La verdad duele", puntaje: 7.5, categorias: ["Accion", "Aventura", "Drama"]}]}/>
      </section>
    </div>
  );
}

export default App;
