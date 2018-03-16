import expect from 'expect';
import apiReducer from '../Reducers';
import * as actions from '../Actions';
import SpotifyMock from './Mock';

const initialState = {};

describe('API Reducer', () => {
    it('should update the API to be the new object', () => {
        const api = {api: new SpotifyMock()};
        const action = actions.setAPI(api);
        const reducer = apiReducer;
        const newState = reducer(initialState, action);
        expect(newState.apiReducer).not.toBe(null);
     });
});

