import React from 'react';
import './styles.css';
import logomark from './logomark.png';
import { Link } from 'react-router-dom';
import jwtDecode from "jwt-decode";

const token = localStorage.getItem('token');

function exit(e) {
	e.preventDefault();
	localStorage.removeItem('token');
	window.location.replace("/login");
}

function Header() {
	return (
		<header className="main-header">
			<Link to="/app/lista" className="user">{jwtDecode(token).nome}</Link>
			<Link to="/app/catalogo" className="logomark"><img src={logomark} alt="logomark" /></Link>
			<Link to="" onClick={e => exit(e)} className="exit">Sair</Link>
		</header >
	)
}

export default Header;