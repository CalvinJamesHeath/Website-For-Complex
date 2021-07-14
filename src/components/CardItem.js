import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
	paper: {
		boxShadow: theme.shadows[5],
		// border: '2px solid #1f98f4',
	},
	img: { width: '100%', height: '100vh', objectFit: 'fit' },
	appBar: {
		position: 'absolute',
		// top: 0,
	},
	title: {
		// marginLeft: theme.spacing(2),
		flex: 1,
	},
}));
const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />;
});
function CardItem(props) {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<>
			<div>
				<Dialog
					fullScreen
					open={open}
					onClose={handleClose}
					TransitionComponent={Transition}
				>
					<AppBar className={classes.appBar}>
						<Toolbar>
							<IconButton
								style={{ backgroundColor: 'transparent' }}
								onClick={handleClose}
								aria-label='close'
								disableRipple={true}
							>
								<div className='modal-logo'>
									<i className='fas fa-landmark iconTerrazas'></i> &nbsp;
									Terrazas Del Puerto
								</div>
							</IconButton>
							<Typography variant='h6' className={classes.title}></Typography>

							<i className='fas fa-times x' onClick={handleClose} />
						</Toolbar>
					</AppBar>
					<img className={classes.img} alt='PropertyNav' src={props.src} />
				</Dialog>
			</div>
			<li className='cards__item'>
				<div className='cards__item__link'>
					<figure
						className='cards__item__pic-wrap'
						data-category={props.label}
						onClick={handleClickOpen}
					>
						<img
							className='cards__item__img'
							alt='PropertyNav'
							src={props.src}
						/>
					</figure>
					<div className='cards__item__info'>
						<h5 className='cards__item__text'>{props.text}</h5>
					</div>
				</div>
			</li>
		</>
	);
}

export default CardItem;
