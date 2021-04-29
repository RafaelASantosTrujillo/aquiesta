import React from 'react';
import Discover from './Discover';
import MostSeen from './MostSeen';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div className="container-md">
            <div className="d-flex justify-content-end">
                <Link className="btn btn-outline-secondary rounded-pill " to="/login">
                    ¡Inicia sesión!
                </Link>
            </div>
            <Discover />
            <MostSeen />
        </div>
    );
};


export default Main;