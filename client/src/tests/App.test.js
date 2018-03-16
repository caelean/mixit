import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import configureStore from '../configureStore';

it('renders without crashing', () => {
    const div = document.createElement('div');
    const store = configureStore();
    ReactDOM.render(
        <BrowserRouter><Provider store={store}>
            <App/>
        </Provider></BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
