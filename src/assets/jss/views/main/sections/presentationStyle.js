import {
	grayColor,
	navbarHeight,
	darkGrayColor
} from '../../../theme';

const presentationStyle = theme => ({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: '50px 70px 110px',
		height: `calc(100vh - ${navbarHeight + 160}px)`
	},
	col: {
		padding: '0'
	},
	descriptionContainer: {
		display: 'flex',
		marginTop: '70px',
		alignItems: 'center'
	},
	descriptionIconContainer: {
		textAlign: 'center'
	},
	descriptionIcon: {
		[theme.breakpoints.up('xl')]: {
			padding: '20px 10px',
			width: 'calc(100% - 20px)'
		},
		width: '100%',
		maxWidth: '100px',
		padding: '20px 0'
	},
	descriptionText: {
		paddingRight: '20px',
	},
	descriptionTitle: {
		[theme.breakpoints.up('xl')]: {
			fontSize: '28px'
		},
		fontSize: '20px',
		color: darkGrayColor
	},
	descriptionSubtitle: {
		[theme.breakpoints.up('xl')]: {
			fontSize: '20px',
			marginTop: '10px'
		},
		fontSize: '15px',
		color: grayColor,
		marginTop: '5px'
	},
	descriptionUnderline: {
		width: '100%',
		height: '1px',
		backgroundColor: '#00F6FF',
		transformOrigin: '100% 50%'
	},
	sliderContainer: {
		position: 'relative'
	},
	sliderImagesContainer: {
		display: 'table',
		position: 'relative'
	},
	sliderImage: {
		display: 'none',
		maxWidth: '100%',
		borderRadius: '20px',
		backgroundOrigin: 'border-box',
		border: 'double 5px transparent',
		maxHeight: 'calc(100vh - 330px)',
		backgroundClip: 'content-box, border-box',
		backgroundImage: 'linear-gradient(white, white), radial-gradient(circle at top left, #00F6FF 50%, #0190FF 70%)'
	},
	activeSliderImage: {
		display: 'block'
	},
	sliderImageOverlay: {
		top: '5px',
		left: '5px',
		position: 'absolute',
		borderRadius: '15px',
		width: 'calc(100% - 10px)',
		height: 'calc(100% - 15px)',
		backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) 60%)'
	},
	sliderBulletsContainer: {
		top: '0',
		left: '0',
		height: '100%',
		display: 'flex',
		position: 'absolute',
		flexDirection: 'column',
		justifyContent: 'space-evenly'
	},
	sliderBulletContainer: {
		display: 'flex',
		cursor: 'pointer',
		marginLeft: '-18px',
		alignItems: 'center',
		'&:before': {
			zIndex: '1',
			left: '-18px',
			width: '17px',
			height: '34px',
			content: '" "',
			position: 'absolute',
			border: '3px solid #00F6FF',
			borderTopLeftRadius: '34px',
			borderBottomLeftRadius: '34px'
		},
		'&:after': {
			left: '-2px',
			width: '17px',
			height: '34px',
			content: '" "',
			position: 'absolute',
			border: '3px solid white',
			borderTopRightRadius: '34px',
			borderLeftColor: 'transparent',
			borderBottomRightRadius: '34px'
		}
	},
	sliderBullet: {
		zIndex: '1',
		margin: '3px',
		width: '34px',
		height: '34px',
		borderRadius: '50%',
		backgroundColor: 'rgba(0, 0, 0, 0.3)'
	},
	activeSliderBullet: {
		backgroundColor: 'white'
	}
});

export default presentationStyle;