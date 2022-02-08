import React, { useState, useEffect } from 'react';
import './styles.css';

function MyList() {

    const [myList, setMyList] = useState([]);

    useEffect(() => {
        const myListStr = localStorage.getItem('myList');
        if (myListStr) {
            setMyList(JSON.parse(myListStr));
        }
    }, []);

    function handleRemoveItem(id) {
        const newList = myList.filter(movie => movie.id !== id);
        setMyList(newList);
        localStorage.setItem('myList', JSON.stringify(newList));
    }

    return (
        <React.Fragment>
            <h2 className="my-list-title">Minha Lista</h2>

            <div class="container">
                <div class="table">
                    <div class="header">
                        <div class="item title">Título</div>
                        <div class="item genre">Gênero</div>
                        <div class="item year">Ano</div>
                        <div class="item"></div>
                    </div>
                    <div class="content">
                        {myList.map(movie =>
                            <div key={movie.id} class="row">
                                <div class="item title">{movie.titulo}</div>
                                <div class="item genre">{movie.genero}</div>
                                <div class="item year">{movie.ano}</div>
                                <div class="item">
                                    <button type="button" onClick={() => handleRemoveItem(movie.id)} className="btn-remove">Remover</button>
                                </div>
                            </div>
                        )}
                        {myList.length === 0 &&
                            <div class="row">
                                <div class="item">Nenhum filme adicionado</div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MyList;