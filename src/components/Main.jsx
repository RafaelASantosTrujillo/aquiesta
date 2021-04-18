import React from 'react';
import Discover from './Discover';
import MostSeen from './MostSeen';

const Main = () => {
    return (
        <div className="container-md">
            <div className="d-flex justify-content-end">
                <a href="#" className="btn btn-outline-secondary rounded-pill">¡Registra tu Negocio!</a>
            </div>
            <Discover />
            <MostSeen />
        </div>
    );
};


export default Main;