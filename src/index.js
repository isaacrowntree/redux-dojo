import { createStore } from 'redux';
import React from 'react';
import ReactDom from 'react-dom';
import { connect, Provider } from 'react-redux';

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

(function myLoop (i) {
   setTimeout(function () {
      store.dispatch(action);
      if (--i) myLoop(i);
   }, 1000)
})(10);

class Counter extends React.Component {
  render() {
    return (
      <div>Count: 1</div>
    );
  }
}

Counter = connect(state => state)(Counter);

ReactDom.render(<Provider store={store}><Counter /></Provider>,
  document.getElementById('root')
);
