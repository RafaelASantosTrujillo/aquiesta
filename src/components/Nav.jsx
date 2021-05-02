import React, { useState } from "react";
import DropdownItem from "./DropdownItem";
import DarkModeToggle from "react-dark-mode-toggle";
import { Link } from 'react-router-dom';
import "../css/nav.css";
// import { logDOM } from "@testing-library/dom";

const states = [
    { id: 1, name: "Aguascalientes"},
    { id: 2, name: "Baja California"},
    { id: 3, name: "Baja California Sur"},
    { id: 4, name: "Campeche"},
    { id: 5, name: "Chiapas"},
    { id: 6, name: "Chihuahua"},
    { id: 7, name: "Ciudad de México"},
    { id: 8, name: "Coahuila"},
    { id: 9, name: "Colima"},
    { id: 10, name: "Durango"},
    { id: 11, name: "Estado de México"},
    { id: 12, name: "Guanajuato"},
    { id: 13, name: "Guerrero"},
    { id: 14, name: "Hidalgo"},
    { id: 15, name: "Jalisco"},
    { id: 16, name: "Michoacán"},
    { id: 17, name: "Morelos"},
    { id: 18, name: "Nayarit"},
    { id: 19, name: "Nuevo León"},
    { id: 20, name: "Oaxaca"},
    { id: 21, name: "Puebla"},
    { id: 22, name: "Querétaro"},
    { id: 23, name: "Quintana Roo"},
    { id: 24, name: "San Luis Potosí"},
    { id: 25, name: "Sinaloa"},
    { id: 26, name: "Sonora"},
    { id: 27, name: "Tabasco"},
    { id: 28, name: "Tamaulipas"},
    { id: 29, name: "Tlaxcala"},
    { id: 30, name: "Veracruz"},
    { id: 31, name: "Yucatán"},
    { id: 32, name: "zacatecas"},
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
                <Link className="nav-link" to="/featured" onClick={itemActive}>
                    Destacados
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
                        return <DropdownItem
                            key={state.id} 
                            state={state.name}      
                        />;
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
