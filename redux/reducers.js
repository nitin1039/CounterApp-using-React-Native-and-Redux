import { combineReducers } from 'redux';

const initialState = {
    counter: 0,
    numbers: [],
  };
  

  
  
  const numberReducer = (state = initialState.numbers, action) => {
    switch (action.type) {
      case 'ADD_NUMBER':
        return [...state, state.length + 1];
      case 'DELETE_NUMBER':
        return state.filter((_, index) => index !== action.payload);
      default:
        return state;
    }
  };
  
  
  export default combineReducers({
 
    numbers: numberReducer,
  });