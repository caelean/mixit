import React from 'react';
import ReactDOM from 'react-dom';
import SpotifyMock from './Mock'
import Postings from "../components/Postings";
import { Provider } from 'react-redux';
import configureStore from '../configureStore';

it('renders and calls the api without failing', () => {
    const div = document.createElement('div');
    const store = configureStore();

    ReactDOM.render(
        <Provider store={store}>
            <Postings api={new SpotifyMock()} />
        </Provider>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
