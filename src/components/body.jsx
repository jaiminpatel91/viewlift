import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Home} from "./home";
import {About} from "./about";

export class Body extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path={"/"} exact component={Home} />
                    <Route path={"/index"} component={Home} />
                    <Route path={"/about"} component={About} />
                </div>
            </Router>
        );
    }
}
