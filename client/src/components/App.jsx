import React, { Component } from 'react';
import '../App.css';
import SpotifyWebApi from 'spotify-web-api-js';
import Login from './Login'
import Routes from "./Routes";
import Navigation from "./Navigation"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../Actions';
import { withRouter } from 'react-router';

class App extends Component {

    constructor(props){
        super(props);
        const params = this.getHashParams();
        const spotifyApi = new SpotifyWebApi();
        const token = params.access_token;
        if (token) {
            spotifyApi.setAccessToken(token);
        }
        this.state = {
            loggedIn: token ? true : false,
            api: spotifyApi,
            playlists: ['user playlists'],
        };
        this.props.actions.setAPI(spotifyApi);
    }

    render() {
        return (
            <div className='App'>
                <h1>Mixit</h1>
                {
                    this.state.loggedIn ? (
                        <div>
                            <Navigation/>
                            <Routes/>
                        </div>
                    ) : (
                        <Login/>
                    )
                }
            </div>
        )
    }

    getHashParams() {
        let hashParams = {};
        let e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        e = r.exec(q);
        while (e) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
            e = r.exec(q);
        }
        return hashParams;
    }
}
function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
