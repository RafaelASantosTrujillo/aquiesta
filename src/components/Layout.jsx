import React from "react";
import Header from "./Header";

function Layout(props) {
    return (
        <React.Fragment>
            <Header theme = {props.theme}/>
            {props.children}
        </React.Fragment>
    );
}
export default Layout;
