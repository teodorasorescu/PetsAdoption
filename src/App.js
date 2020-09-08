import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home';
import Pets from './components/pets';
import Header from './components/header';
import Footer from './components/footer';
import Cats from './components/cat';
import Dogs from './components/dogs';
import Donate from './components/donate';
import PetCare from './components/petcare';
import AboutUs from './components/aboutus';

import ConfigureStore from './components/store';
import { Provider } from 'react-redux';
import Favs from './components/fav';

function App() {
	return (
		<Provider store={ConfigureStore}>
			<div className='page'>
				<div className='container'>
					<BrowserRouter>
						<Header />
						<Switch>
							<Route exact path='/' component={Home} />
							<Route exact path='/pets' component={Pets} />
							<Route exact path='/dogs' component={Dogs} />
							<Route exact path='/donate' component={Donate} />
							<Route exact path='/petcare' component={PetCare} />
							<Route exact path='/cats' component={Cats} />
							<Route exact path='/info' component={AboutUs} />
							<Route exact path='/favorites' component={Favs} />
						</Switch>
						<Footer />
					</BrowserRouter>
				</div>
			</div>
		</Provider>
	);
}

export default App;
