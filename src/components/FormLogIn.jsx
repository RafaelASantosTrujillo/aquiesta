import React from 'react';
import '../css/formSearch.css';

const FormSearch = () => {
    return (
        <form className="d-flex">
            <button className="btn btn-outline-primary btn-image px-3 mr-2" type="submit">
            Registrarte
            </button>
            <button className="btn btn-primary btn-image px-5" type="submit">
            Iniciar Sesión
            </button>
        </form>
    );
};


export default FormSearch;