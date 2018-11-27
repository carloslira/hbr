import React from 'react';
import PropTypes from 'prop-types';

import {
    NavLink
} from 'react-router-dom';

import classNames from 'classnames';
import injectSheet from 'react-jss';

import appRoutes from '../routes/app';

import logo from '../assets/img/logo.png';

import sidebarContentStyle from '../assets/jss/components/sidebarContentStyle';

const SidebarContent = ({ ...props }) => {

    const {
        classes,
        className
    } = props;

    return (
        <div className={classNames(className, classes.container)}>
            <div className={classes.logoContainer}>
                <img className={classes.logo} src={logo} alt="HBR Engenharia" />
            </div>
            <div className={classes.listContainer}>
                <ul className={classes.list}>
                    {appRoutes.map((prop, key) => {
                        return (
                            <li className={classes.listItem} key={key}>
                                <NavLink
                                    key={key}
                                    to={prop.path}
                                    className={classes.listItemLink}
                                    activeClass={classes.listItemActiveLink}
                                >
                                    {prop.sidebarName}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

SidebarContent.propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object.isRequired
};

export default injectSheet(sidebarContentStyle)(SidebarContent);
