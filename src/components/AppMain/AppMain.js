import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import classnames from 'classnames';
import Dashboard from '../Dashboard/Dashboard';

import './AppMain.scss';

const AppMain = ({ sideNavOpen }) => {
	const appMainClasses = classnames('AppMain', {
		'AppMain--nav-open': sideNavOpen,
	});

	return (
		<div className={appMainClasses}>
			<Switch>
				<Route exact path='/dashboard' component={Dashboard} />
				<Route
					exact
					path='/'
					render={() => <Redirect to='/dashboard' />}
				/>
			</Switch>
		</div>
	);
};

export default AppMain;
