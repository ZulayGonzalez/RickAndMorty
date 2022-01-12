import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link to="/" className="navbar-brand"> Hola </Link>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink exact activeClassName="active" to="/paginaInicial" className="nav-item nav-link"> Rick&Morty </NavLink>
                    <NavLink exact activeClassName="active" to="/" className="nav-item nav-link"> Inicio </NavLink>

                </div>
            </div>
        </nav>
    )
}


