import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../img/logo-aqui-esta.svg';
import Nav from './Nav';

import LogInOut from './LogInOut';

import '../css/navbar.css';

const NavBar = (props) => {
    return (
        <nav className={
            "navbar navbar-expand-lg navbar-light pt-5 pb-5 " + props.theme
        }>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={Logo} alt="Logo Aquí Está" className="w-50" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Nav />

                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <LogInOut />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;