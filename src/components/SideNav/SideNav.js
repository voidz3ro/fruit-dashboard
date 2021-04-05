import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import './SideNav.scss';

const SideNav = ({ isOpen }) => {
	const sideNavClasses = classnames('SideNav', {
		'SideNav--open': isOpen,
	});

	return (
		<div className={sideNavClasses}>
			<ul className='SideNav__links'>
				<Link to='/dashboard'>{'Dashboard'}</Link>
			</ul>
		</div>
	);
};

export default SideNav;
