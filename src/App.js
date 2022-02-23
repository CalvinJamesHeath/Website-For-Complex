import './App.css';
import Navbar from './components/Navbar';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
} from 'react-router-dom';
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

					<Route path='/Mapa' exact>
						<Map />
					</Route>
					<Route path='/Propiedades' exact></Route>
					<Route path='/TermsOfService' exact>
						<Terms />
					</Route>
					<Route path='*' exact>
						<div style={{ textAlign: 'center', margin: '4rem 0 5rem 0' }}>
							<h1 style={{ color: 'red' }}>Error 404.</h1>
							<br />
							<h1>Paguina solicitada no existe.</h1>
							<br />

							<NavLink to='/'>
								<h1>Presiona aqui para volver al inicio!</h1>
							</NavLink>
						</div>
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
