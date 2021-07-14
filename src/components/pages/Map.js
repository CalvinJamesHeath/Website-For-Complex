import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Map.css';
import { Box, Typography } from '@material-ui/core';
function CircularProgressWithLabel(props) {
	return (
		<Box style={{ textAlign: 'center', paddingTop: '3rem' }}>
			<CircularProgress variant='determinate' {...props} size='7rem' id='mui' />
			<Box>
				<Typography
					variant='h4'
					component='div'
					style={{ position: 'relative', bottom: '80px' }}
					color='textSecondary'
				>{`${Math.round(props.value)}%`}</Typography>

				<div className='loading--terrazas'>
					<i className='fas fa-landmark iconTerrazas' />
					&nbsp; Terrazas
				</div>
				<div className='loading--terrazas'>
					<i className='fas fa-landmark iconTerrazas' />
					&nbsp; Del
				</div>
				<div className='loading--terrazas'>
					<i className='fas fa-landmark iconTerrazas' />
					&nbsp; Puerto
				</div>
			</Box>
		</Box>
	);
}
function Map() {
	const [progress, setProgress] = React.useState(10);
	const [map, setMap] = React.useState(false);

	React.useEffect(() => {
		const timer = setInterval(() => {
			setProgress((prevProgress) =>
				prevProgress >= 60 ? 100 : prevProgress + 30,
			);
			// console.log('checking for infinite loops');
		}, 60);
		setTimeout(function () {
			setMap(true);
			clearInterval(timer);
			// console.log('TIMEOUT');
		}, 600);
		return () => {
			clearInterval(timer);
			// console.log('useEffect return statement');
		};
	}, []);

	return (
		<div className='googlemap'>
			{!map && (
				<div className='loading'>
					<CircularProgressWithLabel value={progress} />
				</div>
			)}

			<iframe
				src='https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2308.013919353384!2d-64.48352442058686!3d-31.400774322232454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sterrazas%20del%20puerto!5e1!3m2!1ses-419!2sar!4v1626128620879!5m2!1ses-419!2sar'
				className='map'
				style={{ border: 'none' }}
				title='map'
			></iframe>
		</div>
	);
}

export default Map;
