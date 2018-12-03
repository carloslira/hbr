import React from 'react';
import PropTypes from 'prop-types';

import {
	NavLink
} from 'react-router-dom';

import classNames from 'classnames';
import injectSheet from 'react-jss';

import MenuToggle from '../components/MenuToggle';

import logo from '../assets/img/logo.png';

import navbarStyle from '../assets/jss/components/navbarStyle';

const Navbar = ({ ...props }) => {

	const {
		classes,
		className
	} = props;

	return (
		<nav className={classNames(className, classes.container)}>
			<div className={classes.wrapper}>
				<div className={classes.logoContainer}>
					<img src={logo} className={classes.logo} alt="HBR Engenharia" />
				</div>
				<MenuToggle />
			</div>
		</nav>
	);
}

Navbar.propTypes = {
	className: PropTypes.string,
	classes: PropTypes.object.isRequired
};

export default injectSheet(navbarStyle)(Navbar);