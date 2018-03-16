import { combineReducers } from 'redux';


const initialState = {
    api: null,
    id: null,
    user: null
};

function apiReducer(state = initialState.api, action) {
    switch (action.type) {
        case 'SET API':
            return action.api;
        default:
            return state;
    }
}

function idReducer(state = initialState.id, action) {
    switch (action.type) {
        case 'SET ID':
            return action.id;
        default:
            return state;
    }
}

function userReducer(state = initialState.user, action) {
    switch (action.type) {
        case 'SET USER':
            return action.user;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    apiReducer,
    idReducer,
    userReducer
});

export default rootReducer;
