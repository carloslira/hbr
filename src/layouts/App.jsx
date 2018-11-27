import React from 'react';
import PropTypes from 'prop-types';

import {
    Route,
    Switch,
    Redirect
} from "react-router-dom";

import Sidebar from 'react-sidebar';
import injectSheet from 'react-jss';
import StickyBox from 'react-sticky-box';

import Navbar from '../components/Navbar';
import MenuToggle from '../components/MenuToggle';
import SidebarContent from '../components/SidebarContent';

import breakpoints from '../styles/breakpoints';

import appRoutes from '../routes/app';

import appStyle from '../assets/jss/layouts/appStyle';

const mql = window.matchMedia(breakpoints.up('md', false));

class App extends React.Component {

    state = {
        open: false
    };

    componentWillMount() {
        mql.addListener(this.mediaQueryChanged);
    }

    mediaQueryChanged = () => {
        this.setState({
            open: false
        });
    };

    render() {
        const {
            classes
        } = this.props;

        const {
            open
        } = this.state;

        const sidebarProps = {
            open,
            pullRight: !mql.matches,
            onSetOpen: this.onSetOpen,
            sidebar: <SidebarContent />,
            sidebarClassName: classes.sidebar,
            contentClassName: classes.content,
            overlayClassName: classes.sidebarOverlay
        };

        return (
            <Sidebar {...sidebarProps}>
                {mql.matches ? (
                    <StickyBox className={classes.stickyBox}>
                        <Navbar />
                    </StickyBox>
                ) : (
                    <MenuToggle onClick={this.toggleOpen} />
                )}
                <Switch>
                    {appRoutes.map((props, key) => {
                        if (props.redirect) {
                            return <Redirect from={props.path} to={props.to} key={key} />;
                        }

                        return <Route path={props.path} component={props.component} key={key} />;
                    })}
                </Switch>
            </Sidebar>
        );
    }

    toggleOpen = e => {
        this.setState(prevState => ({
            open: !prevState.open
        }));

        if (e) {
            e.preventDefault();
        }
    };

    onSetOpen = open => {
        this.setState({ open });
    };

    componentWillUnmount() {
        mql.removeListener(this.mediaQueryChanged);
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired
};

export default injectSheet(appStyle)(App);
