import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../api';
import MovieCard from './MovieCard';
import './styles.css';

function Catalog() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchMovies()
            .then(response => setMovies(response.data))
            .catch(() => {
                alert('Erro ao listar filmes');
            })
    }, []);

    return (
        <div className="movies-container">
            <div className="items">
                {movies.map(movie =>
                    <MovieCard key={movie.id} movie={movie} />
                )}
            </div>
        </div>
    )
}

export default Catalog;