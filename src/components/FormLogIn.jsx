import React from 'react';
import { Link } from 'react-router-dom';
import '../css/formSearch.css';

const FormSearch = () => {
    return (
        <div className="container-fluid d-flex">
            <div className="align-items-md-center ">
                    <Link className="btn btn-outline-primary btn-image px-3 mr-2 " to="/register">
                        Registrate
                    </Link>
                    <Link className="btn btn-outline-primary btn-image px-3 mr-2 " to="/login">
                        Inicia sesión
                    </Link>   
            </div>
        </div>
    );
};


export default FormSearch;