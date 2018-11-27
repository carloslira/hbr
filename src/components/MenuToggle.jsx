import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import injectSheet from 'react-jss';

import menuToggleStyle from '../assets/jss/components/menuToggleStyle';

const MenuToggle = ({ ...props }) => {

	const {
		onClick,
		classes,
		className
	} = props;

	return (
		<a href="#toggle" className={classNames(className, classes.container)} onClick={onClick}>
			<div className={classes.bar} />
			<div className={classes.bar} />
			<div className={classes.bar} />
		</a>
	);
}

MenuToggle.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	classes: PropTypes.object.isRequired
};

export default injectSheet(menuToggleStyle)(MenuToggle);
