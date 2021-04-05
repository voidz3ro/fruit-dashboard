import React from 'react';

import './AppHeader.scss';

const AppHeader = ({ toggleSideNav }) => {
	return (
		<header className='AppHeader'>
			<div className='AppHeader__avatar'></div>
			<div className='AppHeader__nav-toggle' onClick={toggleSideNav}>
				<span className='material-icons md-36'>menu</span>
			</div>
		</header>
	);
};

export default AppHeader;
