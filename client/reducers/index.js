import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import exercises from './exercises';

const rootReducer = combineReducers({exercises, routing: routerReducer});

export default rootReducer;