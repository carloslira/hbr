import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import injectSheet from 'react-jss';

import containerStyle from '../../assets/jss/components/awesomeScroller/containerStyle';

let wheelTimeout = null;

class Container extends React.Component {

	state = {
		currentSection: 0
	};

	componentDidMount() {
		window.addEventListener('wheel', this.onWheelStart);
	}

	onWheelStart = e => {
		clearTimeout(wheelTimeout);
		wheelTimeout = setTimeout(() => {
			this.onWheelEnd(e);
		}, 250);

		return false;
	};

	onWheelEnd = e => {
		let event = window.event || e,
			delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));

		if (delta < 0) {
			if (this.state.currentSection === this.props.children.length - 1) {
				return;
			}

			this.setState(prevState => ({
				currentSection: prevState.currentSection + 1
			}));
		} else if (delta > 0) {
			if (this.state.currentSection === 0) {
				return;
			}

			this.setState(prevState => ({
				currentSection: prevState.currentSection - 1
			}));
		}
	};

	render() {
		const {
			classes,
			children,
			className
		} = this.props;

		const {
			currentSection
		} = this.state;

		return (
			<div className={classNames(className, classes.container)}>
				{children[currentSection]}
			</div>
		);
	}

	componentWillUnmount() {
		window.removeEventListener('wheel', this.onWheelStart);
	}
}

Container.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	classes: PropTypes.object.isRequired
};

export default injectSheet(containerStyle)(Container);
