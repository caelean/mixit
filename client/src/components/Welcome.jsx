import React, { Component } from 'react';
import Playlist from './Playlist.jsx'
import { Button } from 'react-bootstrap';


class Welcome extends Component {
    constructor(props) {
        super(props);
        const spotifyApi = this.props.api;
        this.state = {
            nowPlaying: {name: 'Not Checked', albumArt: ''},
            api: spotifyApi,
            playlists: []
        };

        spotifyApi.getUserPlaylists().then((response) => {

            let playlists = response.items.map((item) =>
                <Playlist playlist={item.id}
                          api={this.state.api}
                />
            );
            this.setState({
                playlists: playlists
            })
        });
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
                <Button onClick={() => this.getNowPlaying()}>
                    Check Now Playing
                </Button>
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
}

export default Welcome;
