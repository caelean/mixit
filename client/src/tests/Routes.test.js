import React from 'react';
import ReactDOM from 'react-dom';
import SpotifyMock from './Mock'
import Routes from "../components/Routes";
import { BrowserRouter } from 'react-router-dom'

it('renders and calls the mock api without failing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Routes api={new SpotifyMock()} /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
