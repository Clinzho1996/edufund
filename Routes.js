import React from "react";
import {BrowserRouter as Switch, Route} from "react-router-dom";


const Routes = ({props}) => {
    return (
        <switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" exact component={Contact} />
        </switch>
    )
}