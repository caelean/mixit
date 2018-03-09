import React from 'react';
import ReactDOM from 'react-dom';
import List from '../components/List';
import SpotifyMock from './Mock'

it('renders and calls the api without failing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List api={new SpotifyMock()} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
