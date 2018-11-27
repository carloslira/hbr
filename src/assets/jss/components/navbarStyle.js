import {
    transition,
    defaultFont,
    primaryColor,
    navbarHeight
} from '../theme';

const navbarStyle = theme => ({
    container: {
        width: '100%',
        backgroundColor: 'white',
		height: `${navbarHeight}px`,
		boxShadow: '0px 1px 10px 0px rgba(2, 105, 184, 0.75)'
    },
	logo: {
		top: '0',
		left: '0',
		height: '50px',
		margin: '15px 50px',
		position: 'absolute'
	},
    list: {
		top: '0',
		right: '0',
		margin: '0',
        padding: '0 50px',
		position: 'absolute'
    },
    listItem: {
        display: 'inline-block'
    },
    listItemLink: {
        ...transition,
		...defaultFont,
        display: 'block',
		cursor: 'pointer',
        padding: '0 20px',
        fontWeight: '500',
        color: primaryColor,
        textDecoration: 'none',
        lineHeight: `${navbarHeight}px`
    },
    listItemActiveLink: {
        color: primaryColor
    }
});

export default navbarStyle;