import React, {useState} from 'react';
import DropdownItem from './DropdownItem';
import DarkModeToggle from 'react-dark-mode-toggle';
import '../css/nav.css';


const states = [
    "Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", "Ciudad de México", "Coahuila", "Colima", "Durango", "Estado de México", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "zacatecas" 
]

const Nav = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => false)

    return (
        <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0 d-flex justify-content-between">
            <li className="nav-item me-4">
                <a className="nav-link active" aria-current="page" href="/">Inicio</a>
            </li>
            <li className="nav-item me-4">
                <a className="nav-link" href="https://google.com">Directorio</a>
            </li>
            <li className="nav-item me-4">
                <a className="nav-link" href="https://google.com">Categorias</a>
            </li>
            <li className="nav-item me-4">
                <a className="nav-link" href="https://google.com">Destacados</a>
            </li>
            <li className="nav-item me-4">
                <a className="nav-link" href="https://google.com">Registrar Negocio</a>
            </li>
            <li className="nav-item me-4 dropdown">
                <a className="nav-link dropdown-toggle" href="https://google.com" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Seleccionar Estado
                            </a>
                <ul className="dropdown-menu scrollable-menu" aria-labelledby="navbarDropdown">
                    {
                        states.map(state => {
                            return (
                                <DropdownItem
                                    state={state}
                                />
                            )
                        })
                    }
                </ul>
            </li>
            <li className="nav-item me-4">
                <DarkModeToggle 
                    onChange={setIsDarkMode}
                    checked={isDarkMode}
                    size={80}
                />
            </li>
        </ul>
    );
};

export default Nav;