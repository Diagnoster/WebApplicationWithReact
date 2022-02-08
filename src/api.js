import axios from "axios";

const API_URL = "https://pertobilingueadm.com.br/server/testes";

export function authenticate(payload) {
	return axios.post(`${API_URL}/login`, payload);
}

export function fetchMovies() {
	return axios(`${API_URL}/filmes`);
}

export function fetchMovie(id) {
	return axios(`${API_URL}/filmes/${id}`);
}
