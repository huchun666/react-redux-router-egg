import React, { Component } from 'react'
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import home from "./home";
import login from "./login";

class Index extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={home}/>
                    <Route exact path="/login" component={login}/>
                </Switch>
            </Router>
        )
    }
}

export default Index;