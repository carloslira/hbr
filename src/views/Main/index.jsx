import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';

import sections from './sections';

import Section from '../../components/AwesomeScroller/Section';
import Container from '../../components/AwesomeScroller/Container';

import mainStyle from '../../assets/jss/views/main/style';

class Main extends React.Component {

	render() {
		const {
			classes
		} = this.props;

		return (
			<Container>
				{sections.map((prop, key) =>
					<Section key={key}>
						<prop.component />
					</Section>
				)}
			</Container>
		);
	}
}

Main.propTypes = {
	classes: PropTypes.object.isRequired
};

export default injectSheet(mainStyle)(Main);
