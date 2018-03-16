import { combineReducers } from 'redux';


const initialState = {
  api: null,
};

function apiReducer(state = initialState.api, action) {
  console.log(action);
  switch (action.type) {
      case 'SET API':
      return action.api;
    default:
      return state;
  }
}

const rootReducer = combineReducers({apiReducer})
export default rootReducer;
