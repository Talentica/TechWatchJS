'use strict';

import React from 'react';
import RouteInfo from '../routeInfo';
import { Link } from 'react-router-dom'
export default class NavbarView extends React.Component {

	render() {
		return (
			<nav className="navbar navbar-inverse">
				<div className="container">
					<div className="navbar-header">
						<div id="navbar" className="navbar-collapse collapse">
							<ul className="nav navbar-nav">
								{Object.keys(RouteInfo).map((key, i) => <li key={key} className={this.props.activeClass}><Link to={RouteInfo[key]}>{key}</Link></li>)}
							</ul>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}