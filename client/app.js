// let's go!
import React from 'react';
import { render } from 'react-dom';

// import css here
// import css from './styles/....';

// import components
import App from './components/App';
import ExerciseIndex from './components/ExerciseIndex';
import Exercise from './components/Exercise';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={ExerciseIndex}></IndexRoute>
				<Route path="/exercise/:exId" component={Exercise}></Route>
			</Route>
		</Router>
	</Provider>
)

render( router, document.getElementById('root') );

