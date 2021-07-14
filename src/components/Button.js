import React from 'react';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
	children,
	type,
	onClick,
	buttonStyle,
	buttonSize,
	location,
}) => {
	const checkButtonStyle = STYLES.includes(buttonStyle)
		? buttonStyle
		: STYLES[0];

	const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
	// function scrollToTop() {
	// 	window.scrollTo({
	// 		top: 690,
	// 		behavior: 'smooth',
	// 	});
	// }
	return (
		<a
			href={location}
			className='btn-mobile'
			style={{ scrollBehavior: 'smooth' }}
		>
			<button
				className={`btn ${checkButtonStyle} ${checkButtonSize}`}
				onClick={onClick}
				type={type}
			>
				{children}
			</button>
		</a>
	);
};
