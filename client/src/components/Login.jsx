import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Login extends Component {

    render() {
        return (
            <div className="Login">
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
