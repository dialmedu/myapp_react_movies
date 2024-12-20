import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieListRoute from './peliculas/componentes/MovieListRoute';
import MovieCardRoute from './peliculas/componentes/MovieCardRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<MovieListRoute />} />
        <Route path="/peliculas/pelicula/:id" element={<MovieCardRoute />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
