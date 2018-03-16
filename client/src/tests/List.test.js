import React from 'react';
import ReactDOM from 'react-dom';
import List from '../components/List';
import SpotifyMock from './Mock';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';

it('renders and calls the api without failing', () => {
    const div = document.createElement('div');
    const store = configureStore();

    ReactDOM.render(
        <Provider store={store}>
            <List api={new SpotifyMock()} />
        </Provider>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
