import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import ThemeContext from "../context/ThemeContext";

import '../css/LogInOut.css';

import { AuthContext } from "../context/LogInContext";

const LogInOut = () => {
    const authContext = useContext(AuthContext);
    const { theme } = useContext(ThemeContext);
    const logoutHandler = () => {
        authContext.logout();
    };

    return (
        <div className="container-fluid d-flex navbar-nav me-auto ms-auto mb-2 mb-lg-0 justify-content-between align-items-center mr-auto ml-auto ">
            <div className="align-items-md-center ">
                {!authContext.isLoggedIn && (
                    <Link
                        className="btn btn-outline-primary btn-image px-3 mr-2"
                        to="/login"
                    >
                        <span
                            style={{ background: "transparent" }}
                            className={`${theme}`}
                        >
                            Inicia sesión
                        </span>
                    </Link>
                )}
                {authContext.isLoggedIn && (
                    <Link
                        className="btn btn-outline-primary btn-image px-3 mr-2"
                        to="/"
                        onClick={logoutHandler}
                    >
                        Salir
                    </Link>
                )}
            </div>
        </div>
    );
};

export default LogInOut;
