import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';

import 'react-awesome-slider/dist/styles.css';
import AwesomeSlider from 'react-awesome-slider';

import image_1 from '../../../assets/img/main/sections/presentation/image_1.jpg';
import image_2 from '../../../assets/img/main/sections/presentation/image_2.jpg';
import image_3 from '../../../assets/img/main/sections/presentation/image_3.jpg';

import presentationStyle from '../../../assets/jss/views/main/sections/presentationStyle';

class Presentation extends React.Component {

	state = {
		selected: 0
	};

	onSliderMounted = () => {
		setInterval(() => {
			this.setState(prevState => ({
				selected: prevState.selected === 1 ? 0 : prevState.selected + 1
			}));
		}, 10000);
	};

	render() {
		const {
			classes
		} = this.props;

		const {
			selected
		} = this.state;

		return (
			<div className={classes.container}>
				<AwesomeSlider selected={selected} onFirstMount={this.onSliderMounted}>
					<div data-src={image_1} />
					<div data-src={image_2} />
					<div data-src={image_3} />
				</AwesomeSlider>
			</div>
		);
	}
}

Presentation.propTypes = {
	classes: PropTypes.object.isRequired
};

export default injectSheet(presentationStyle)(Presentation);
