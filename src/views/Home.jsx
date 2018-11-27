import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import homeStyle from '../assets/jss/views/homeStyle';

class Home extends React.Component {

	render() {
		const {
			classes
		} = this.props;

		return (
			<div className={classes.container}>
                Home
			</div>
		);
	}
}

Home.propTypes = {
	classes: PropTypes.object.isRequired
};

export default injectSheet(homeStyle)(Home);
