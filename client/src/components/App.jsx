import React, { Component } from 'react';
import '../App.css';
import SpotifyWebApi from 'spotify-web-api-js';
import Login from './Login'
import Routes from "./Routes";
import Navigation from "./Navigation"


class App extends Component {

    constructor(){
        super();
        const params = this.getHashParams();
        const spotifyApi = new SpotifyWebApi();
        const token = params.access_token;
        if (token) {
            spotifyApi.setAccessToken(token);
        }
        this.state = {
            loggedIn: token ? true : false,
            nowPlaying: { name: 'Not Checked', albumArt: '' },
            api: spotifyApi,
            playlists: ['user playlists'],
        };
    }

    render() {
        return (
            <div className='App'>
                <h1>Mixit</h1>
                {
                    this.state.loggedIn ? (
                        <div>
                            <Navigation/>
                            <Routes api={this.state.api}/>
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

export default App;
