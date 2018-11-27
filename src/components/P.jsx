import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import injectSheet from 'react-jss';

import pStyle from '../assets/jss/components/pStyle';

const P = ({ ...props }) => {

	const {
		color,
		classes,
		children,
		className
	} = props;

	return (
		<p className={classNames(className, classes.p, color ? classes[color] : classes.black)}>
			{children}
		</p>
	);
}

P.propTypes = {
	className: PropTypes.string,
	children: PropTypes.any.isRequired,
	classes: PropTypes.object.isRequired,
	color: PropTypes.oneOf([
		'black',
		'white',
		'primary',
		'secondary'
	])
};

export default injectSheet(pStyle)(P);
