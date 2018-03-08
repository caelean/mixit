import React, { Component } from 'react';

class Login extends Component {

    render() {
        return (
            <div className="Login">
                <p>Post your playlists and receive custom mixes</p>
                <a href='http://localhost:8484/login'>
                    <button>
                        Login in with Spotify
                    </button>
                </a>
            </div>
        )
    }
}

export default Login;
