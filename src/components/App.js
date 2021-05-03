import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./Main";
import NotFound from "./NotFound";
import Layout from "./Layout";
import Home from "./Home";
import Category from "./Category";
import Featured from "./Featured";
import Register from "./Register";
import Login from "./Login";

import { AuthContext } from './context';

function App() {
    const [loggedIn, setLoggedIn] = React.useState(false);

    const login = () => {
        setLoggedIn(true);
    }

    const logout = () => {
        setLoggedIn(false);
    }

    return (
        <BrowserRouter>
            <AuthContext.Provider value={{isLoggedIn: loggedIn, login: login, logout: logout }}>
                <Layout>
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
            </AuthContext.Provider >
        </BrowserRouter>
    );
}

export default App;
