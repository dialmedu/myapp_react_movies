import React from 'react';
import '../css/pelicula.css';

const MovieCard = ({ imageSrc, title, puntaje, categorias }) => {
    return (
    <div className="col col-sm-3">
      <div className="pelicula">
        <figure className="pelicula__poster">
          <img className="pelicula__image" src={imageSrc} alt={title} />
          <div className="pelicula__info">
            <button className="btn pelicula__puntaje">
              <i className=""></i>{puntaje}
            </button>
          </div>
        </figure>
        <section>
          <button className="pelicula__title-button">
            <h2 className="pelicula__title">{title}</h2>
          </button>
          <ul className="pelicula__categorias">
            {categorias.map((categoria, index) => (
              <li key={index} className="categoria__item">
                <button className="categoria__name-button">{categoria}</button>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default MovieCard;

