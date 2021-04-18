import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from "./Register";
import Commerce from "./Commerce";
import Header from "./Header";
import Main from "./Main";
import NotFound from "./NotFound";
import Layout from "./Layout";
import Home from "./Home";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
