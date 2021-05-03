import React, {useContext} from 'react';
import image404 from "../img/404.png"
import ThemeContext from "../context/ThemeContext";

function NotFound (){
    const { theme } = useContext(ThemeContext);
    return(
        <React.Fragment>
            <div style={{display:"flex", justifyContent:"center",textAlign:"center", height:"100%"}} className={`${theme}`}>
                <img src={image404} alt="Página no encontrada" width="40%"/>
            </div>
        </React.Fragment>
    );
}
export default NotFound;