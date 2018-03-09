import React, { Component } from 'react';
import { Table } from 'react-bootstrap';


class Postings extends Component {

    constructor(props) {
        super(props);
        const spotifyApi = this.props.api;
        this.state = {
            api: spotifyApi,
            playlists: []
        };
        spotifyApi.getUserPlaylists().then((response) => {
            let playlists = response.items.map((playlist) =>
                <tr>
                    <td>{playlist.name}</td>
                    <td>{playlist.tracks.total}</td>
                </tr>
            );
            this.setState({
                playlists: playlists
            })
        });
    }

    render() {
        return (
            <div className="Postings">
                <Table>
                    <thead>
                    <tr>
                        <th>Playlist Name</th>
                        <th>Number of Songs</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.playlists}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Postings;
