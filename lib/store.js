import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const exampleInitialState = {
  count: 0,
};

export const actionTypes = {
  ADD: 'ADD',
};

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return Object.assign({}, state, {
        count: state.count + 1,
      });
    default: return state;
  }
};

// ACTIONS

export const addCount = () => dispatch => dispatch({ type: actionTypes.ADD });

export const initStore = (initialState = exampleInitialState) => createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
