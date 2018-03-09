import React from 'react';
import ReactDOM from 'react-dom';
import SpotifyMock from './Mock'
import Playlist from "../components/Playlist";

it('renders and calls the mock api without failing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Playlist api={new SpotifyMock()} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
