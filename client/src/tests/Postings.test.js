import React from 'react';
import ReactDOM from 'react-dom';
import SpotifyMock from './Mock'
import Postings from "../components/Postings";

it('renders and calls the mock api without failing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Postings api={new SpotifyMock()} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
