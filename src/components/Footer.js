import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<div className='footer-container'>
			<span id='footer'></span>
			<section className='footer-subscription'>
				<p className='footer-subscription-text'>
					Hay oportunidades que sólo se dan una vez...
				</p>
				<p className='footer-subscription-heading'>
					Terrazas Del Puerto es una de estas. Sol, lago, lujo, confort y
					rentabilidad, no te la pierdas.
				</p>

				{/* <div className='input-areas'>
					<form>
						<input
							className='footer-input'
							name='email'
							type='email'
							placeholder='Your Email'
						/>
						<Button buttonStyle='btn--outline'>Subscribe</Button>
					</form>
				</div> */}
			</section>
			<div className='footer-links'>
				<div className='footer-link-wrapper'>
					<div className='footer-link-items'>
						<h2>Sobre Nosotros</h2>

						<a
							href='https://www.linkedin.com/in/calvin-heath-0467a61b6/'
							target='_blank'
							rel='noreferrer'
						>
							Desarollador Web
						</a>
						<Link to='/TermsOfService'>Términos de Servicio</Link>
					</div>
				</div>
				<div className='footer-link-wrapper'>
					<div className='footer-link-items'>
						<h2>Contáctanos</h2>

						<a
							href='https://wa.me/+5493541557776?text=Hola,%20estoy%20interesado%20en%20el%20Triplex!'
							target='_blank'
							rel='noopener noreferrer'
						>
							Maria 3541 557776
						</a>
						<a rel='noreferrer' href='tel:3541563957'>
							Calvin 3541 563957
						</a>

						{/* <Link to='/'>Destinations</Link>
						<Link to='/'>Sponsorships</Link> */}
					</div>
					{/* <div className='footer-link-items'>add <div className=""></div>
						<h2>Videos</h2>
						<Link to='/'>Submit Video</Link>
						<Link to='/'>Ambassadors</Link>
						<Link to='/'>Agency</Link>
						<Link to='/'>Influencer</Link>
					</div>
					<div className='footer-link-items'>
						<h2>Social Media</h2>
						<Link to='/'>Instagram</Link>
						<Link to='/'>Facebook</Link>
						<Link to='/'>Youtube</Link>
						<Link to='/'>Twitter</Link>
					</div> */}
				</div>
			</div>
			<section className='social-media'>
				<div className='social-media-wrap'>
					<div className='social-icons'>
						<a
							rel='noreferrer'
							className='social-icon-link facebook'
							href='https://www.facebook.com/calvin.heath.56'
							target='_blank'
							aria-label='Facebook'
						>
							<i className='fab fa-facebook-f' />
						</a>
						<a
							rel='noreferrer'
							className='social-icon-link instagram'
							href='https://www.instagram.com/calvinchulo/'
							target='_blank'
							aria-label='Instagram'
						>
							<i className='fab fa-instagram' />
						</a>
						<a
							rel='noreferrer'
							className='social-icon-link youtube'
							href='https://www.youtube.com/channel/UCnkRHKsazwqlMv2m0ZGb2nw'
							target='_blank'
							aria-label='Youtube'
						>
							<i className='fab fa-youtube' />
						</a>
						<a
							rel='noreferrer'
							className='social-icon-link twitter'
							href='https://twitter.com/calvinjheath'
							target='_blank'
							aria-label='Twitter'
						>
							<i className='fab fa-twitter' />
						</a>
						<a
							rel='noreferrer'
							className='social-icon-link linkedin'
							href='https://www.linkedin.com/in/calvin-heath-0467a61b6/'
							target='_blank'
							aria-label='LinkedIn'
						>
							<i className='fab fa-linkedin' />
						</a>
					</div>

					<div className='footer-logo'>
						<Link to='/' className='social-logo'>
							<i className='fas fa-landmark iconTerrazas' />
							&nbsp; Terrazas Del Puerto
						</Link>
					</div>
				</div>
			</section>
			<small className='website-rights animation'>
				Terrazas Del Puerto © 2021
			</small>
		</div>
	);
}

export default Footer;
