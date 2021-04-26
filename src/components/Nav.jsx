import React, { useState } from "react";
import DropdownItem from "./DropdownItem";
import DarkModeToggle from "react-dark-mode-toggle";
import { Link } from 'react-router-dom';
import "../css/nav.css";
import { logDOM } from "@testing-library/dom";

const states = [
    "Aguascalientes",
    "Baja California",
    "Baja California Sur",
    "Campeche",
    "Chiapas",
    "Chihuahua",
    "Ciudad de México",
    "Coahuila",
    "Colima",
    "Durango",
    "Estado de México",
    "Guanajuato",
    "Guerrero",
    "Hidalgo",
    "Jalisco",
    "Michoacán",
    "Morelos",
    "Nayarit",
    "Nuevo León",
    "Oaxaca",
    "Puebla",
    "Querétaro",
    "Quintana Roo",
    "San Luis Potosí",
    "Sinaloa",
    "Sonora",
    "Tabasco",
    "Tamaulipas",
    "Tlaxcala",
    "Veracruz",
    "Yucatán",
    "zacatecas",
];

const Nav = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => false);

    const itemActive  = e => {
        const anterior = document.querySelector('.active');
        if(anterior)
            anterior.classList.remove('active');
        e.target.classList.add('active')
    }

    return (
        
        <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0 d-flex justify-content-between align-items-center mr-auto ml-auto">
            <li className="nav-item mr-3">
                <Link className="nav-link active" onClick={itemActive} aria-current="page" to="/">
                    Inicio
                </Link>
            </li>
            <li className="nav-item mr-3">
                <Link className="nav-link" to="/directory" onClick={itemActive}>
                    Directorio
                </Link>
            </li>
            <li className="nav-item mr-3">
                <Link className="nav-link" to="/categories" onClick={itemActive}>
                    Categorias
                </Link>
            </li>
            <li className="nav-item mr-3">
                <Link className="nav-link" to="/featured" onClick={itemActive}>
                    Destacados
                </Link>
            </li>
            <li className="nav-item mr-3" onClick={itemActive}>
                <Link className="nav-link" to="/register">
                    Registrar Negocio
                </Link>
            </li>
            <li className="nav-item mr-3 dropdown">
                <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Seleccionar Estado
                </Link>
                <ul
                    className="dropdown-menu scrollable-menu"
                    aria-labelledby="navbarDropdown"
                >
                    {states.map((state) => {
                        return <DropdownItem state={state} />;
                    })}
                </ul>
            </li>
            <li className="nav-item">
                <DarkModeToggle
                    onChange={setIsDarkMode}
                    checked={isDarkMode}
                    size={50}
                />
            </li>
        </ul>
    );
};

export default Nav;
