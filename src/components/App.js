import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./Main";
import NotFound from "./NotFound";
import Layout from "./Layout";
import Home from "./Home";
import Category from "./Category";
import Featured from "./Featured";
import Register from "./Register";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/directory" component={Main} />
                    <Route exact path="/categories" component={Category} />
                    <Route exact path="/featured" component={Featured} />
                    <Route exact path="/register" component={Register} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
