import {
	defaultFont,
	primaryColor
} from '../theme';

const pStyle = theme => ({
    p: {
        ...defaultFont,
        margin: '0'
	},
	black: {
		color: 'black'
	},
	white: {
		color: 'white'
	},
	primary: {
		color: primaryColor
	}
});

export default pStyle;