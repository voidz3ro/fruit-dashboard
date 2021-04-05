import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import AppMain from '../AppMain/AppMain';
import './App.scss';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<header className='App__header'>
					<ul className='App__nav'>
						<Link to='/'>
							<li className='App__nav-item'>{'Dashboard'}</li>
						</Link>
					</ul>
				</header>

				<Switch>
					<Route path='/' component={AppMain} />
				</Switch>

				<footer className='App__footer'>
					<div>{`@copyright ${
						parseInt(new Date().getFullYear()) + 70
					} future dashboard`}</div>
					<div>
						<Link to='/main'>{'MAIN'}</Link>
					</div>
				</footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
