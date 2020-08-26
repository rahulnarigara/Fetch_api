import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './Navbar';
import History from './History';
import Recent from './Recent';
import { Route, Switch, Redirect } from 'react-router-dom';

function App() {
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path='/' component={History} />
				<Route exact path='/recent' component={Recent} />
				<Redirect to='/' />
			</Switch>
		</>
	);
}

export default App;
