import React, { useEffect } from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Cards() {
	useEffect(() => {
		Aos.init({ duration: 2000, throttleDelay: 99, once: true });
		// return () => {};
	}, []);
	return (
		<>
			<span className='anchor' id='comenzar'></span>
			<div className='cards'>
				<h1>
					Un lugar exclusivo donde diseño y buen gusto se encuentran en su justa
					medida.
				</h1>

				<h1>Barrio Santa Rita, Gobernador Roca 380.</h1>
				<div className='cards__container'>
					<div className='cards__wrapper'>
						<div data-aos='fade-up'>
							<ul className='cards__items'>
								<CardItem
									src='images/233333.jpg'
									text='Triplex ubicado dentro de la hermosa provincia de Cordoba, Villa Carlos Paz es el destino turístico de mayor crecimiento en nuestro país.'
									label='Villa Carlos Paz'
									// path='/services'
								/>
								<CardItem
									src='images/lexus__entrada.jpeg'
									text='Condominio de Alta Gama y con todas las comodidades para vivir de manera explendida, tranquila y muy segura.'
									label='Lujo'
									// path='/services'
								/>
							</ul>
						</div>
						<div data-aos='fade-up-left'>
							<ul className='cards__items'>
								<CardItem
									src='images/entrada.jpg'
									text='Entorno natural increible y a pocos minutos de toda la diversion que propone dia y noche Villa Carlos Paz. Recientemente refinado y pintado en su totalidad.'
									label='Adoquinado y Portón Eléctrico'
									// path='/services'
								/>
								<CardItem
									src='images/IMG_2604.jpg'
									text='Pisos de cerámica y piedra. Palmeras y Pergolado de Madera Blanca estilo Moderno recién terminado. Estacionamiento apto para más de 2 vehículos.'
									label='Parrilla y Estacionamiento Privado Bajo Techo'
									// path='/products'
								/>
								<CardItem
									src='images/IMG_2561.jpg'
									text='Aire Acondicionado, espacios abiertos, ventanales y mucha luz natural. Recientemente Pintado con nuevas luminarias en todos los espacios.'
									label='Living-Comedor'
									// path='/sign-up'
								/>
							</ul>
						</div>
						<div data-aos='flip-down'>
							<ul className='cards__items'>
								<CardItem
									src='images/IMG_2564.jpg'
									text='Teclas Dimerizables y 
                            Enchufes nuevos de primera marca instalados.'
									label='Elegante y Práctico'
									// path='/services'
								/>
								<CardItem
									src='images/IMG_2565.jpg'
									text='Alacena, Girfería y Repisas Nuevas. Incluye espacio generoso para Lavavajillas.'
									label='Cocina con Dos Bachas'
									// path='/services'
								/>
							</ul>
						</div>
						<div data-aos='fade'>
							<ul className='cards__items'>
								<CardItem
									src='images/IMG_2576.jpg'
									text='Habitación Master con Aire Acondicionado y Black-Out. Segundo piso previamente barnizado color Nogal.'
									label='Master Bedroom'
									// path='/services'
								/>
								<CardItem
									src='images/IMG_2594.jpg'
									text='Balcón con hermosa vista, Ventanales extensos, Placares grandes corredizos y Cubrecamas nuevos.'
									label='Balcón Privado'
									// path='/services'
								/>
							</ul>
						</div>
						<div data-aos='zoom-in'>
							<ul className='cards__items'>
								<CardItem
									src='images/IMG_2852.jpg'
									text='Cuenta con un Televisor de 42 pulgadas y un gran baño con bañadera y bidét. '
									label='Confort y Calidad'
									// path='/services'
								/>
								<CardItem
									src='images/IMG_2857.jpg'
									text='El Triplex contiene 3 Baños finos de cerámica con paredes marinas.'
									label='Master Bathroom'
									// path='/services'
								/>
								<CardItem
									src='images/IMG_2580.jpg'
									text='Todos Pintados en su totalidad. Poseen radiadores y luminarias nuevas.'
									label='Master Bathroom'
									// path='/products'
								/>
							</ul>
						</div>
						<div data-aos='fade-up'>
							<ul className='cards__items'>
								<CardItem
									src='images/IMG_2586.jpg'
									text='Habitación con cama matrimonial confortable.'
									label='Segunda Habitación'
									// path='/services'
								/>
								<CardItem
									src='images/IMG_2859.jpg'
									text='Habitación con par de camas simples y climatización central.'
									label='Tercera Habitación'
									// path='/services'
								/>
							</ul>
						</div>
						<div data-aos='flip-down'>
							<ul className='cards__items'>
								<CardItem
									src='images/deckn.jpg'
									text='Deck impermeablizado con tratamiento de brillo.'
									label='Terraza'
									// path='/services'
								/>
								<CardItem
									src='images/IMG_2600.jpg'
									text='Terraza Amplia con vista panorámica!'
									label='MiniBar'
									// path='/services'
								/>
								<CardItem
									src='images/IMG_2851.jpg'
									text='Espacios confortables y decoración atractiva.'
									label='Simpleza y armonía'
									// path='/products'
								/>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Cards;
