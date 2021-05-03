import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./Main";
import NotFound from "./NotFound";
import Layout from "./Layout";
import Home from "./Home";
import Category from "./Category";
import Featured from "./Featured";
import Register from "./Register";
import Login from "./Login";
import ThemeContext from "../context/ThemeContext";
import { AuthContext } from './context';
import "../css/App.css";

function App() {
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [theme, updateTheme] = useState("light");
    useEffect(() => {
        console.log("El tema es:", theme);
    }, [theme]);
    const login = () => {
        setLoggedIn(true);
    }

    const logout = () => {
        setLoggedIn(false);
    }

    return (
        <BrowserRouter>
            {/* <AuthContext.Provider value={{isLoggedIn: loggedIn, login: login, logout: logout }}> */}
            <ThemeContext.Provider value={{ theme, updateTheme }}>
                    <Layout theme={theme}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/directory" component={Main} />
                        <Route exact path="/categories" component={Category} />
                        <Route exact path="/featured" component={Featured} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Route component={NotFound} />
                    </Switch>
                </Layout>
                </ThemeContext.Provider>
            {/* </AuthContext.Provider > */}
        </BrowserRouter>
    );
}

export default App;
