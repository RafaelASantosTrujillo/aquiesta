import React from 'react';
import Nav from './Nav';
import FormSearch from './FormSearch';



const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light pt-5 pb-5">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src="https://raw.githubusercontent.com/RafaelASantosTrujillo/aquiesta/998e490f1dda3d8573e1bc2caf1bc5c40ba4b04c/img/logo-aqui-esta.svg" alt="Logo Aquí Está" className="w-50"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Nav />
                    <FormSearch />
                </div>
            </div>
        </nav>
    );
};


export default NavBar;