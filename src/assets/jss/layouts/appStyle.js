import {
	sidebarWidth
} from '../theme';

let githubPrefix = '';
if (process.env.NODE_ENV === 'production') {
    githubPrefix = '/hbr';
}

const appStyle = theme => ({
	'@font-face': [
		{
			fontWeight: '300',
			fontFamily: 'JosefinSans',
			src: `url("${githubPrefix}/fonts/JosefinSans/JosefinSans-Light.ttf") format("truetype")`
		},
		{
			fontFamily: 'JosefinSans',
			src: `url("${githubPrefix}/fonts/JosefinSans/JosefinSans-Regular.ttf") format("truetype")`
		},
		{
			fontWeight: '500',
			fontFamily: 'JosefinSans',
			src: `url("${githubPrefix}/fonts/JosefinSans/JosefinSans-SemiBold.ttf") format("truetype")`
		},
		{
			fontWeight: 'bold',
			fontFamily: 'JosefinSans',
			src: `url("${githubPrefix}/fonts/JosefinSans/JosefinSans-Bold.ttf") format("truetype")`
		}
	],
	container: {
        height: '100vh'
	},
	sidebar: {
		zIndex: '5 !important',
		backgroundColor: 'white',
		width: `${sidebarWidth}px`
	},
	sidebarOverlay: {
		zIndex: '4 !important'
	},
	stickyBox: {
		zIndex: '3'
	},
	content: {
		overflowX: 'hidden'
	}
});

export default appStyle;