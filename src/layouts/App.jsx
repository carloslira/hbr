import React from 'react';
import PropTypes from 'prop-types';

import {
	Route,
	Switch,
	Redirect
} from "react-router-dom";

import injectSheet from 'react-jss';

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

		return (
			<Switch>
				{appRoutes.map((props, key) => {
					if (props.redirect) {
						return <Redirect from={props.path} to={props.to} key={key} />;
					}

					return <Route path={props.path} component={props.component} key={key} />;
				})}
			</Switch>
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
