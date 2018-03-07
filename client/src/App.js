import React, { Component } from 'react';
import './App.css';
import SpotifyWebApi from 'spotify-web-api-js';

class App extends Component {
    constructor(){
        super();
        const params = this.getHashParams();
        console.log(params);
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
    getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        e = r.exec(q);
        while (e) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
            e = r.exec(q);
        }
        return hashParams;
    }
    render() {
        return (
            <div className='App'>
                <a href='http://localhost:8484'> Login to Spotify </a>
                <div>
                    Now Playing: { this.state.nowPlaying.name }
                </div>
                <div>
                    <img src={this.state.nowPlaying.albumArt} style={{ height: 150 }}/>
                </div>
                 <div>
                    Playlists: { this.state.playlists }
                </div>

                { this.state.loggedIn &&
                <div>
                    <button onClick={() => this.getNowPlaying()}>
                        Check Now Playing
                    </button>
                    <button onClick={() => this.getPlaylists()}>
                        Retrieve playlists
                    </button>
                </div>
                }
            </div>

        )
    }
    getNowPlaying(){
        this.state.api.getMyCurrentPlaybackState().then((response) => {
            console.log(response);
            this.setState({
                nowPlaying: {
                    name: response.item.name,
                    albumArt: response.item.album.images[0].url
                }
            });
        })
    }
    getPlaylists(){
        this.state.api.getUserPlaylists()
            .then((response) => {
                let playlists = response.items.map((item) =>
                    <li>{item.name}</li>
                );
                this.setState({
                    playlists: playlists
                });
            })
    }
}
export default App;
