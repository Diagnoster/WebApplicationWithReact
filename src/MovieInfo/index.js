import React, { useEffect, useState } from 'react';
import { fetchMovie } from '../api';
import { useParams } from "react-router-dom";
import './styles.css';

function MovieInfo() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [myList, setMyList] = useState([]);

    useEffect(() => {
        fetchMovie(id)
            .then((response) => {
                setMovie(response.data);
                getCurrentList();
            })
            .catch(() => {
                alert('Erro ao buscar filme');
            })
    }, [id]);

    function getCurrentList() {
        let currentList = localStorage.getItem('myList');
        currentList = currentList ? JSON.parse(currentList) : [];
        setMyList(currentList);
    }

    function handleAddMovie(movie) {
        const newList = myList.concat(movie);
        setMyList(newList);
        localStorage.setItem('myList', JSON.stringify(newList));
    }

    return (
        <div className="movie-container">
            {movie &&
                <React.Fragment>
                    <section className="info">
                        <div className="description">
                            <h2 className="title">{movie.titulo}</h2>
                            <h4 className="genre-year">{movie.genero}, {movie.ano}</h4>
                        </div>
                        <div className="sinopse">
                            <text>{movie.sinopse}</text>
                        </div>
                    </section>
                    <section className="actions">
                        <iframe
                            src={"https://www.youtube.com/embed/" + movie.trailerIdYoutube}
                            title={movie.titulo}
                            frameBorder="0">
                        </iframe>
                        {myList.some(m => m.id === movie.id) ?
                            <button className="btn-success no-hover">FILME ADICIONADO NA LISTA</button>
                            :
                            <button onClick={() => handleAddMovie(movie)}>+ ADICIONAR NA LISTA</button>
                        }
                    </section>
                </React.Fragment>
            }
        </div>
    )
}

export default MovieInfo;