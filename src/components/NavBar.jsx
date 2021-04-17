import React from 'react';
import Nav from './Nav';
import FormSearch from './FormSearch';



const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light pt-5 pb-5">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Logo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Nav />
                    <FormSearch />
                </div>
            </div>
        </nav>
    );
};


export default NavBar;