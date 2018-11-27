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
			fontFamily: 'Pluto',
			src: `url("${githubPrefix}/fonts/Pluto/HVD Fonts - PlutoLight.otf") format("opentype")`
		},
		{
			fontFamily: 'Pluto',
			src: `url("${githubPrefix}/fonts/Pluto/HVD Fonts - PlutoRegular.otf") format("opentype")`
		},
		{
			fontWeight: '500',
			fontFamily: 'Pluto',
			src: `url("${githubPrefix}/fonts/Pluto/HVD Fonts - PlutoMedium.otf") format("opentype")`
		},
		{
			fontWeight: 'bold',
			fontFamily: 'Pluto',
			src: `url("${githubPrefix}/fonts/Pluto/HVD Fonts - PlutoBold.otf") format("opentype")`
		}
	],
	container: {
        height: '100vh',
        overflowX: 'hidden',
        overflowY: 'scroll'
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