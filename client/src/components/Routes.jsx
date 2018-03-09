import React, { Component } from 'react';
import Welcome from "./Welcome";
import List from "./List";
import Postings from "./Postings"
import { Route } from "react-router-dom";


class Routes extends Component {

    render() {
        return (
            <div className="Routes">
                <Route path="/welcome" render={() => {return <Welcome/>}}/>
                <Route path="/playlists" render={() => {return <List api={this.props.api}/>}}/>
                <Route path="/postings" render={() => {return <Postings api={this.props.api}/>}}/>
            </div>
        )
    }
}

export default Routes;
