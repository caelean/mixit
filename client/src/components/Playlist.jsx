import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';


class Playlist extends Component {
    constructor(props) {
        super(props);
        const spotifyApi = this.props.api;
        this.state = {
            api: spotifyApi,
            songs: [],
        };
        if(spotifyApi) {
            spotifyApi.getPlaylistTracks(this.props.user, this.props.id).then((response) => {
                let songs = response.items.map((song) =>
                    <tr key={song.track.name}>
                        <td>{song.track.name}</td>
                        <td>{song.track.artists.map((artist) => <span
                            key={artist.name}
                            className="nobr">{artist.name}&nbsp;&nbsp;&nbsp;</span>)}</td>
                    </tr>
                );
                this.setState({
                    songs: songs
                })
            });
        }
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

function mapStateToProps(state) {
    return {
        api: state.apiReducer,
        id: state.idReducer,
        user: state.userReducer
    };
}

export default connect(mapStateToProps)(Playlist);
