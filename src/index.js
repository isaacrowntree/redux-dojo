import { createStore } from 'redux';

const reducer = (state = {count: 0}, action) => {
  if (action.type === 'INCREMENT') {
    return Object.assign({}, state, {count: state.count + 1});
  }
  return state;
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const action = {type: 'INCREMENT'};

store.subscribe(() => (console.log(store.getState())));

store.dispatch(action);
