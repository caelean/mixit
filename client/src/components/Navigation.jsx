import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';


class Navigation extends Component {

    render() {
        return (
            <div className="Nav">
                <Button>
                    <NavLink to="/welcome">Get Started</NavLink>
                </Button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button>
                    <NavLink to="/playlists">View My Playlists</NavLink>
                </Button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button>
                    <NavLink to="/postings">View Posted Playlists</NavLink>
                </Button>
            </div>
        )
    }
}

export default Navigation;
