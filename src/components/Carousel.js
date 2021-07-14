import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function CarouselComponent() {
	return (
		<div>
			<div className='container__carousel'>
				<Carousel>
					<Carousel.Item>
						<div className='container__img__inicio'>
							<img
								className='d-block w-75 img__inicio img-responsive center'
								// src={Matafuego}
								src='https://images.squarespace-cdn.com/content/v1/5c4fe6773c3a538d5808a1ae/1550096875763-SPOD5M5YONGJBCLQ1GXX/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/1534060.jpg?format=2500w'
								alt='First slide'
							/>
						</div>
						{/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>
                          Nulla vitae elit libero, a pharetra augue mollis
                          interdum.
                        </p>
                      </Carousel.Caption> */}
					</Carousel.Item>
					<Carousel.Item>
						<div className='container__img__inicio'>
							<img
								className='d-block center w-75 img__inicio img-responsive'
								// src={Matafuego02}
								src='https://images.squarespace-cdn.com/content/v1/5c4fe6773c3a538d5808a1ae/1550096875763-SPOD5M5YONGJBCLQ1GXX/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/1534060.jpg?format=2500w'
								alt='Third slide'
							/>
						</div>

						{/* <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </Carousel.Caption> */}
					</Carousel.Item>
					<Carousel.Item>
						<div className='container__img__inicio'>
							<img
								className='d-block w-75 img__inicio img-responsive'
								// src={Matafuego}
								src='https://images.squarespace-cdn.com/content/v1/5c4fe6773c3a538d5808a1ae/1550096875763-SPOD5M5YONGJBCLQ1GXX/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/1534060.jpg?format=2500w'
								alt='Third slide'
							/>
						</div>

						{/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur.
                          </p>
                        </Carousel.Caption> */}
					</Carousel.Item>
				</Carousel>
			</div>
		</div>
	);
}

export default CarouselComponent;
