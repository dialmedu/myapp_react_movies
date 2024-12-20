import React from 'react';
import MovieCard from './MovieCard';
import '../css/pelicula.css';

const MovieList = ({peliculas}) => {
	return (
		<div className="row-fluid">
			<div id="listapeliculas">
				{peliculas.map(pelicula => (
					<MovieCard
						key={pelicula.id}
						imageSrc={pelicula.imageSrc}
						title={pelicula.title}
						puntaje={pelicula.puntaje}
						categorias={pelicula.categorias}
					/>
				))}
			</div>
		</div>
	);
};

export default MovieList;
