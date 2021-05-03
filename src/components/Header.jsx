import React from 'react';
import NavBar from './NavBar';

const Header = (props) => {
    return (
        <NavBar theme={props.theme}/>
    );
};


export default Header;