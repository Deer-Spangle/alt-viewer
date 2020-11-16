import React from "react";
import {App} from "./App";
import {BrowserRouter, Switch, Route} from "react-router-dom";

export const AppRouter: React.FunctionComponent<{}> = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/:viewer?/:foreground?/:background?">
                    <App />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}