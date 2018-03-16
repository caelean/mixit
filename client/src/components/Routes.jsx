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
                <Route path="/playlists" render={() => {console.log('here'); return <List/>}}/>
                <Route path="/postings" render={() => {return <Postings/>}}/>
            </div>
        )
    }
}

export default Routes;
