import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import Playlist from "./Playlist";
import { connect } from 'react-redux';
import * as actions from '../Actions';
import { bindActionCreators } from 'redux';


class List extends Component {

    constructor(props) {
        super(props);
        const spotifyApi = this.props.api;
        this.state = {
            playlists: [],
            showAll: true
        };
        if (spotifyApi) {
            spotifyApi.getUserPlaylists().then((response) => {
                let playlists = response.items.map((playlist) =>
                    <tr key={playlist.name}
                        onClick={() => this.openPlaylist(playlist.id, playlist.owner.id)}>
                        <td>{playlist.name}</td>
                        <td>{playlist.tracks.total}</td>
                    </tr>
                );
                this.setState({
                    playlists: playlists
                })
            });
        }
    }

    openPlaylist(id, user) {
        this.setState({
            showAll: false
        });
        this.props.actions.setID(id);
        this.props.actions.setUser(user);

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
                        <Playlist/>
                    </div>
                    )
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        api: state.apiReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
