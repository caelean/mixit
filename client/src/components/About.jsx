import React, { Component } from 'react';

class About extends Component {

    render() {
        return (
            <div className="About">
                <p>Post your playlists and receive custom mixes</p>
                <a href='http://localhost:8484/about'>
                    <button>
                        This is the About Page
                    </button>
                </a>
            </div>
        )
    }
}

export default About;
