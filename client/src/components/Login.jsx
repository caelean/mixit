import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Login extends Component {

    render() {
        return (
            <div className="Login">
                <p>Post your playlists and receive custom mixes</p>
                <a href='http://localhost:8484/login'>
                    <Button>
                        Login in with Spotify
                    </Button>
                </a>
            </div>
        )
    }
}

export default Login;
