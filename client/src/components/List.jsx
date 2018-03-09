import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import Playlist from "./Playlist";


class List extends Component {

    constructor(props) {
        super(props);
        const spotifyApi = this.props.api;
        this.state = {
            playlists: [],
            id: '',
            user: '',
            showAll: true
        };
        spotifyApi.getUserPlaylists().then((response) => {
            console.log(response);
            let playlists = response.items.map((playlist) =>
                <tr onClick={() => this.openPlaylist(playlist.id, playlist.owner.id)}>
                    <td>{playlist.name}</td>
                    <td>{playlist.tracks.total}</td>
                </tr>
            );
            this.setState({
                playlists: playlists
            })
        });
    }

    openPlaylist(id, user) {
        this.setState({
            id: id,
            user: user,
            showAll: false
        })
    }

    showList() {
        this.setState({
            showAll: true
        })
    }

    render() {
        return (
            <div className="List">
                {
                    this.state.showAll ? (
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
                    ) : (
                    <div>
                        <Button onClick={() => this.showList()}>Return</Button>
                        <Playlist api={this.props.api} id={this.state.id} user={this.state.user}/>
                    </div>
                    )
                }
            </div>
        )
    }
}

export default List;
