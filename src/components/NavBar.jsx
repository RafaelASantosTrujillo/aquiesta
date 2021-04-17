import React from 'react';
import DropdownItem from './DropdownItem';
import FormSearch from './FormSearch';

const states = [
    "Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", "Ciudad de México", "Coahuila", "Colima", "Durango", "Estado de México", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "zacatecas" 
]

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light pt-5 pb-5">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Logo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                    </ul>
                    <FormSearch />
                </div>
            </div>
        </nav>
    );
};


export default NavBar;