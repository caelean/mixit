import { combineReducers } from 'redux';


const initialState = {
  api: null,
};

function apiReducer(state = initialState.api, action) {
  switch (action.type) {
      case 'SET API':
      return action.api;
    default:
      return null;
  }
}

const rootReducer = combineReducers({apiReducer});
export default rootReducer;
