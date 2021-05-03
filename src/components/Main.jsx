import React,{useContext} from 'react';
import Discover from './Discover';
import MostSeen from './MostSeen';
import ThemeContext from "../context/ThemeContext";

const Main = () => {
    const {theme} = useContext(ThemeContext);
    return (
        <div className={`container-fluid ${theme}`}>
            <div className="d-flex justify-content-end">
                {/* <Link className="btn btn-outline-secondary rounded-pill " to="/login">
                    ¡Inicia sesión!
                </Link> */}
            </div>
            <Discover />
            <MostSeen />
        </div>
    );
};


export default Main;