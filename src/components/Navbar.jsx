import React from 'react';
import PropTypes from 'prop-types';

import {
    NavLink
} from 'react-router-dom';

import classNames from 'classnames';
import injectSheet from 'react-jss';

import appRoutes from '../routes/app';

import logo from '../assets/img/logo.png';

import navbarStyle from '../assets/jss/components/navbarStyle';

const Navbar = ({ ...props }) => {

    const {
        classes,
        className
    } = props;

    return (
        <nav className={classNames(className, classes.container)}>
            <img src={logo} className={classes.logo} alt="HBR Engenharia" />
            <ul className={classes.list}>
                {appRoutes.map((prop, key) => {
                    if (prop.redirect) {
                        return null;
                    }

                    return (
                        <li className={classes.listItem} key={key}>
                            <NavLink
                                key={key}
                                to={prop.path}
                                className={classes.listItemLink}
                                activeClass={classes.listItemActiveLink}
                            >
                                {prop.navbarName}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

Navbar.propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object.isRequired
};

export default injectSheet(navbarStyle)(Navbar);