import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap';

class Playlist extends Component {
    render() {
        this.state = {
            content: ''
        };
        console.log(this.props);
         this.props.api.getPlaylistTracks(this.props.playlist.id).then((response) => {
            console.log(response);
            content = response.map((song) =>
                <tr>
                    <td>{song.name}</td>
                    <td>{song.artist}</td>
                    <td>{song.name}</td>
                </tr>
            );
            this.setState({
                content: content
            });
        });
        return (
            <div className="Playlist">
                <h2>{this.props.playlist.name}</h2>
                <Table>
                    <thead>
                    <tr>
                        <th>Song</th>
                        <th>Artist</th>
                        <th>Length</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.content}
                    </tbody>
                </Table>;
            </div>
        )
    }

}

export default Playlist;
