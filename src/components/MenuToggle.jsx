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
			<div className={classes.wrapper}>
				<div className={classNames(classes.bar, classes.tipBar)} />
				<div className={classNames(classes.bar, classes.middleBar)} />
				<div className={classNames(classes.bar, classes.middleBar)} />
				<div className={classNames(classes.bar, classes.tipBar)} />
			</div>
		</a>
	);
}

MenuToggle.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	classes: PropTypes.object.isRequired
};

export default injectSheet(menuToggleStyle)(MenuToggle);
