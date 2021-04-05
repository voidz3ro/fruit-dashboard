import React from 'react';
// import { Link } from 'react-router-dom';
import classnames from 'classnames';

import './AppFooter.scss';

const AppFooter = ({ sideNavOpen }) => {
	const appFooterClasses = classnames('AppFooter', {
		'AppFooter--nav-open': sideNavOpen,
	});

	return (
		<footer className={appFooterClasses}>
			{/* <div className='AppFooter__links'>
				<Link to='/main'>{'MAIN'}</Link>
			</div> */}
			<div>{`@copyright ${
				parseInt(new Date().getFullYear()) + 70
			} future dashboard`}</div>
		</footer>
	);
};

export default AppFooter;
