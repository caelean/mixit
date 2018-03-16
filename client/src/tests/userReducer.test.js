import expect from 'expect';
import userReducer from '../Reducers';
import * as actions from '../Actions';
import SpotifyMock from './Mock';

const initialState = {};

describe('User Reducer', () => {
    it('should update the API to be the new object', () => {
        const user = {user: new SpotifyMock().returnUser()};
        const action = actions.setUser(user);
        const reducer = userReducer;
        const newState = reducer(initialState, action);
        expect(newState.userReducer).not.toBe(null);
     });
});

