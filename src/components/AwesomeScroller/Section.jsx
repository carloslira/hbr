import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import injectSheet from 'react-jss';

import sectionStyle from '../../assets/jss/components/awesomeScroller/sectionStyle';

class Section extends React.Component {

	render() {
		const {
			classes,
			children,
			className
		} = this.props;

		return (
			<div className={classNames(className, classes.container)}>
				{children}
			</div>
		);
	}
}

Section.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	classes: PropTypes.object.isRequired
};

export default injectSheet(sectionStyle)(Section);
