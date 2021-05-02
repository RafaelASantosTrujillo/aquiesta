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

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/directory" component={Featured} />
                    <Route exact path="/categories" component={Category} />
                    <Route exact path="/featured" component={Main} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
