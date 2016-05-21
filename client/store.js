import { createStore, compose} from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory} from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

import exercises from './data/exercises';

// create an object for the default data
const defaultState = {
	exercises,
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

// for hot reloading reducers
if(module.hot) {
  module.hot.accept('./reducers/',() => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;