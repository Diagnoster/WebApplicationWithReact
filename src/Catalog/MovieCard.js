function MovieCard(props) {
	const movie = props.movie;

	function handleClick() {
		window.location.replace(`/app/filme/${movie.id}`);
	}

	return (
		<div className="movie-card" onClick={handleClick}>
			<img src={movie.imagem} alt={movie.titulo} className="image" />
			<div className="info">
				<text className="title">{movie.titulo}</text>
				<div className="description">
					<text>{movie.genero}, {movie.ano}</text>
				</div>
			</div>
		</div>
	)
}

export default MovieCard;