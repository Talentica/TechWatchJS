'use strict';

import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, IndexRoute, Link } from 'react-router-dom'
import HomeView from './views/homeView';
import RouteInfo from './routeInfo';
import DataView from './views/dataView';
import NavbarView from './views/navbarView';

render((
	<Router>
		<div className="myApp">
			<NavbarView />
			<Route exact path="/" component={HomeView} />
			<Route path="/home" component={HomeView} />
			<Route path="/data" component={DataView} />
		</div>
	</Router>
), document.getElementById('root'));