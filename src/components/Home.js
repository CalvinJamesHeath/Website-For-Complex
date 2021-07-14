import React from 'react';
import { Button } from './Button';
// import CarouselComponent from './Carousel';
import './Home.css';
function Home() {
	return (
		<>
			<div className='hero-container'>
				{/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
				{/* <img src='/images/img-home.jpg' alt='' /> */}

				<h1>Villa Carlos Paz</h1>

				<p>¡Una Ciudad Para disfrutar todo el año! </p>
				<div className='hero-btns'>
					<Button
						location='#comenzar'
						className='btns'
						buttonStyle='btn--outline'
						buttonSize='btn--large'
					>
						Comenzar
					</Button>
				</div>
			</div>

			{/* <CarouselComponent /> */}
		</>
	);
}

export default Home;
