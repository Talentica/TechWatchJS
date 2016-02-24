'use strict';

import React from 'react';
import NavigationItem from '../components/navigationItem'

var navigationProps = [
	{"route" : "index.html", "routeName" : "Home"},
	{"route" : "about", "routeName" : "About"},
	{"route" : "contact", "routeName" : "Contact"}
]

export default class NavigationHeader extends React.Component{

	render(){
		return(
			<nav className="navbar navbar-inverse">
			    <div className="container">
			        <div className="navbar-header">
				        <div id="navbar" className="navbar-collapse collapse">
				            <ul className="nav navbar-nav">
				            	{ navigationProps.map((obj, i) => <NavigationItem key={i} route={obj.route} routeName={obj.routeName} /> )}
				            </ul>
				        </div>
			        </div>
			    </div>
			</nav>
		);
	}
}