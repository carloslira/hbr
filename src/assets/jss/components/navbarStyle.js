import {
    navbarHeight
} from '../theme';

const navbarStyle = theme => ({
    container: {
        width: '100%',
		height: `${navbarHeight}px`
	},
	wrapper: {
		display: 'flex',
		padding: '57px 70px'
	},
	logoContainer: {
		flexGrow: '1',
		display: 'flex',
		alignItems: 'center'
	},
	logo: {
		top: '0',
		left: '0',
		height: '50px'
	}
});

export default navbarStyle;