import React,{useContext} from "react";
import "../css/Home.css";
import ThemeContext from "../context/ThemeContext";
function Home() {
    const {theme} = useContext(ThemeContext);
    return (
        <React.Fragment>
            <div className={"home-container " + theme}>
                <div className="home-container1">
                    <h2>Encuentra todo</h2>
                    <p>Negocios al alcance de tu mano</p>
                </div>
                <div className="home-container2">
                    <img
                        src="https://raw.githubusercontent.com/RafaelASantosTrujillo/aquiesta/master/src/img/mainPage/magnifyingGlass2.png"
                        alt="Lupa méxico"
                        width="80%"
                    />
                </div>
            </div>
        </React.Fragment>
    );
}
export default Home;
