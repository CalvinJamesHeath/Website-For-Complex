import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import Map from './components/pages/Map';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Terms from './components/pages/Terms';

function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Switch>
					<Route path='/' exact component={HomePage} />
				</Switch>
				<Switch>
					<Route path='/Mapa' exact>
						<Map />
					</Route>
				</Switch>
				<Switch>
					<Route path='/Propiedades' exact></Route>
				</Switch>
				<Switch>
					<Route path='/TermsOfService' exact>
						<Terms />
					</Route>
				</Switch>
				<Footer />
				<ScrollToTop />
			</Router>
			<div className='whatsapp'>
				<a
					href='https://wa.me/+5493541563957?text=Hola,%20estoy%20interesado%20en%20el%20Triplex!'
					className='whatsapp_float'
					target='_blank'
					rel='noopener noreferrer'
				>
					<i className='fab fa-whatsapp'></i>
				</a>
			</div>
		</div>
	);
}

export default App;
