import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Navbar, NavbarBrand } from 'reactstrap';

import MainScreen from '../Main/MainScreen';
import PhotoScreen from '../Photo/PhotoScreen';

import store from '../../store';
import { Provider } from 'react-redux';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<Container>
						<Navbar color="dark" dark expand="md">
							<NavbarBrand>
								<Link to="/">
									Photo gallary <small>(for back)</small>
								</Link>
							</NavbarBrand>
						</Navbar>
						<Route path="/" exact component={MainScreen} />
						<Route path="/photo/:id" component={PhotoScreen} />
					</Container>
				</Router>
			</Provider>
		);
	}
}

export default App;
