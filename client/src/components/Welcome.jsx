import React, { Component } from 'react';

class Welcome extends Component {
    constructor(props) {
        super(props);
        console.log(this);
        const spotifyApi = this.props.api;
        this.state = {
            nowPlaying: {name: 'Not Checked', albumArt: ''},
            api: spotifyApi,
            playlists: ['user playlists'],
        };
    }

    render() {
        return (
            <div className="Welcome">
                <p>Post your playlists and receive custom mixes</p>
                <div>
                    Now Playing: { this.state.nowPlaying.name }
                </div>
                <div>
                    <img src={this.state.nowPlaying.albumArt} style={{ height: 150 }}/>
                </div>
                <div>
                    Playlists: { this.state.playlists }
                </div>
                <button onClick={() => this.getNowPlaying()}>
                    Check Now Playing
                </button>
                <button onClick={() => this.getPlaylists()}>
                    Retrieve playlists
                </button>
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

export default Welcome;
