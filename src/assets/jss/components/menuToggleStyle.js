import {
	transition,
	darkGrayColor
} from '../theme';

const menuToggleStyle = theme => ({
	container: {
		zIndex: '3',
		top: '20px',
		right: '20px',
		position: 'absolute'
	},
	bar: {
		...transition,
		width: '35px',
		height: '5px',
		margin: '6px 0',
		borderRadius: '3px',
		backgroundColor: darkGrayColor
	}
});

export default menuToggleStyle;