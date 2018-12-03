import {
	darkGrayColor
} from '../theme';

const menuToggleStyle = theme => ({
	container: {
		width: '52px',
		height: '52px',
		display: 'flex',
		borderRadius: '50%',
		border: `2px solid ${darkGrayColor}`
	},
	wrapper: {
		margin: '0 auto',
		alignSelf: 'center'
	},
	bar: {
		height: '2px',
		margin: '6px auto',
		backgroundColor: darkGrayColor
	},
	tipBar: {
		width: '28px'
	},
	middleBar: {
		width: '36px'
	}
});

export default menuToggleStyle;