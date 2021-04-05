import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader';
import AppFooter from '../AppFooter/AppFooter';
import AppMain from '../AppMain/AppMain';
import SideNav from '../SideNav/SideNav';
import './App.scss';

function App() {
	const [sideNavOpen, setSideNavOpen] = useState(true);
	const toggleSideNav = () => {
		setSideNavOpen(!sideNavOpen);
	};

	return (
		<BrowserRouter>
			<div className='App'>
				<AppHeader toggleSideNav={toggleSideNav} />
				<SideNav isOpen={sideNavOpen} />
				<AppMain sideNavOpen={sideNavOpen} />}
				<AppFooter sideNavOpen={sideNavOpen} />
			</div>
		</BrowserRouter>
	);
}

export default App;
