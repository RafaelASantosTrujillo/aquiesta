import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../css/LogInOut.css';

import { AuthContext } from "./context";

const LogInOut = () => {
    const authContext = useContext(AuthContext);

    const logoutHandler = () => {
        authContext.logout();
    };


    return (
        <div className="container-fluid d-flex navbar-nav me-auto ms-auto mb-2 mb-lg-0 justify-content-between align-items-center mr-auto ml-auto ">
            <div className="align-items-md-center ">
                {!authContext.isLoggedIn &&
                    <Link className="btn btn-color px-3 mr-2"
                        to="/login"
                    >Inicia Sesion </Link>}
                {authContext.isLoggedIn &&
                    <Link className="btn-color btn px-3 mr-2"
                        to="/"
                        onClick={logoutHandler}>Salir</Link>}
            </div>
        </div>
    );
};


export default LogInOut;