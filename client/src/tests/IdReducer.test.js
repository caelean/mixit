import expect from 'expect';
import idReducer from '../Reducers';
import * as actions from '../Actions';
import SpotifyMock from './Mock';

const initialState = {};

describe('User Reducer', () => {
    it('should update the API to be the new object', () => {
        const id = {id: new SpotifyMock().returnId()};
        const action = actions.setID(id);
        const reducer = idReducer;
        const newState = reducer(initialState, action);
        expect(newState.idReducer).not.toBe(null);
     });
});

