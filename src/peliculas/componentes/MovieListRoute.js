import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import '../css/pelicula.css';

const MovieList = ({peliculas}) => {
    peliculas = [
        {
            id: 1,
            imageSrc: "https://es.web.img3.acsta.net/medias/nmedia/18/85/53/36/19820768.jpg",
            title: "La verdad duele",
            puntaje: 7.5,
            categorias: ["Accion", "Aventura", "Drama"]
        }
    ]
	return (
		<div className="row-fluid">
			<div id="listapeliculas">
				{peliculas.map(pelicula => (
					<Link to={`/pelicula/${pelicula.id}`}> 
						<MovieCard
							key={pelicula.id}
							imageSrc={pelicula.imageSrc}
							title={pelicula.title}
							puntaje={pelicula.puntaje}
							categorias={pelicula.categorias}
						/>
					</Link>
				))}
			</div>
		</div>
	);
};

export default MovieList;

