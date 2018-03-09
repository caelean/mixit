import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from '../components/Navigation';
import SpotifyMock from './Mock';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Navigation api={new SpotifyMock()}/></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
