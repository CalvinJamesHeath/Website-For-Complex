import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
	const [click, setClick] = useState(false);
	const handleClickNavbar = () => {
		setClick(!click);
	};
	const closeMobileMenu = () => {
		setClick(false);
	};
	const [button, setButton] = useState(false);

	const showButton = () => {
		if (window.innerWidth <= 1060) {
			setButton(false);
		} else {
			setButton(true);
		}
	};
	//calling function to solve mobile refresh hidden btn
	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener('resize', showButton);
	return (
		<>
			<nav className='navbar sticky'>
				<div className='navbar-container sticky'>
					<NavLink
						activeClassName='main-nav-active'
						to='/'
						className='navbar-logo'
						onClick={closeMobileMenu}
					>
						<i className='fas fa-landmark iconTerrazas'></i> &nbsp; Terrazas Del
						Puerto
					</NavLink>
					<div className='menu-icon' onClick={handleClickNavbar}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
					</div>
					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li className='nav-item'>
							<NavLink
								exact
								activeClassName='main-nav-active'
								to='/'
								onClick={closeMobileMenu}
							>
								<div className='nav-links'> Inicio</div>
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								activeClassName='main-nav-active'
								to='/Mapa'
								onClick={closeMobileMenu}
							>
								<div className='nav-links'>Mapa</div>
							</NavLink>
						</li>
						{/* <li className='nav-item'>
							<NavLink
								activeClassName='main-nav-active'
								to='/Propiedades'
								onClick={closeMobileMenu}
							>
								<div className='nav-links'>Propiedades</div>
							</NavLink>
						</li> */}
						<a href='#footer'>
							<li className='nav-item'>
								<div className='nav-links-mobile' onClick={closeMobileMenu}>
									CONTACTO
								</div>
							</li>
						</a>
					</ul>
					{button && (
						<div className='contact--desktop'>
							<Button
								buttonStyle='btn--outline'
								buttonSize='btn--large'
								location='#footer'
							>
								CONTACTO
							</Button>
						</div>
					)}
				</div>
			</nav>
			{/* <React.Fragment>
				<NavLink exact={true} to='/Mapa' activeClassName='main-nav-active'>
					<li>
						<div className='nav-links'>Active</div>
					</li>
				</NavLink>
				<NavLink exact={true} to='/' activeClassName='main-nav-active'>
					<li>
						<div className='nav-links'>Home</div>
					</li>
				</NavLink>
				<NavLink
					exact={true}
					to='/PROPIEDADES'
					activeClassName='main-nav-active'
				>
					<li>
						<div className='nav-links'>Prop</div>
					</li>
				</NavLink>
			</React.Fragment> */}
		</>
	);
}

export default Navbar;
