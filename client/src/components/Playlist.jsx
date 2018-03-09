import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class Playlist extends Component {
    constructor(props) {
        super(props);
        const spotifyApi = this.props.api;
        this.state = {
            api: spotifyApi,
            songs: [],
        };
        spotifyApi.getPlaylistTracks(this.props.user,this.props.id).then((response) => {
            let songs = response.items.map((song) =>
                <tr>
                    <td>{song.track.name}</td>
                    <td>{song.track.artists.map((artist) => <span className="nobr">{artist.name}&nbsp;&nbsp;&nbsp;</span>)}</td>
                </tr>
            );
            this.setState({
                songs: songs
            })
        });
    }

    render() {
        return (
            <div className="Playlist">
                 <Table>
                    <thead>
                    <tr>
                        <th>Song Name</th>
                        <th>Artist</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.songs}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Playlist;
