import {
	grayColor,
    transition,
	navbarHeight,
    primaryColor,
	darkGrayColor,
    lightPrimaryColor
} from '../../../theme';

import image_1 from '../../../../../assets/img/main/sections/presentation/image_1.jpg';
import image_2 from '../../../../../assets/img/main/sections/presentation/image_2.jpg';
import image_3 from '../../../../../assets/img/main/sections/presentation/image_3.jpg';

const presentationStyle = theme => ({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: '50px 70px 110px',
		height: `calc(100vh - ${navbarHeight + 160}px)`
    },
    grid: {
        height: '100%'
    },
    row: {
        height: '100%'
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
		transformOrigin: '100% 50%',
		backgroundColor: lightPrimaryColor
    },
    sliderCol: {
        height: '100%'
    },
	sliderContainer: {
        width: '100%',
        height: '100%',
        position: 'relative',
		borderRadius: '20px',
		backgroundOrigin: 'border-box',
		border: 'double 5px transparent',
		backgroundClip: 'content-box, border-box',
		backgroundImage: `linear-gradient(white, white), radial-gradient(circle at top left, ${lightPrimaryColor} 50%, ${primaryColor} 70%)`
    },
    sliderImage: {
        ...transition,
        width: '100%',
        height: '100%',
        borderRadius: '14px',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat'
    },
    slide0: {
        backgroundImage: `url(${image_1})`
    },
    slide1: {
        backgroundImage: `url(${image_2})`
    },
    slide2: {
        backgroundImage: `url(${image_3})`
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
		marginLeft: '-20px',
		alignItems: 'center',
		'&:before': {
			left: '-25px',
			width: '15px',
			height: '30px',
			content: '" "',
			position: 'absolute',
			borderTopLeftRadius: '30px',
            borderBottomLeftRadius: '30px',
			border: `5px solid ${lightPrimaryColor}`
		}
	},
	sliderBullet: {
        ...transition,
		zIndex: '1',
		width: '30px',
		height: '30px',
		borderRadius: '50%',
		backgroundColor: '#ECF9FF'
	},
	activeSliderBullet: {
		backgroundColor: lightPrimaryColor
	}
});

export default presentationStyle;