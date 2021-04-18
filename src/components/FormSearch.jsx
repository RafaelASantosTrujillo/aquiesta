import React from 'react';
import '../css/formSearch.css';

const FormSearch = () => {
    return (
        <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
            <button className="btn btn-outline-light btn-image px-4" type="submit">
            </button>
        </form>
    );
};


export default FormSearch;