import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';

import whoWeAreStyle from '../../../assets/jss/views/main/sections/whoWeAreStyle';

class WhoWeAre extends React.Component {

	render() {
		const {
			classes
		} = this.props;

		return (
			'WhoWeAre'
		);
	}
}

WhoWeAre.propTypes = {
	classes: PropTypes.object.isRequired
};

export default injectSheet(whoWeAreStyle)(WhoWeAre);
