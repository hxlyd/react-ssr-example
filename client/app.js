import React, {PureComponent, Component} from 'react';
import { Switch, Route, Link} from 'react-router-dom';
import './less/main.less';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from './redux/actions';


function mapStateToProps (state) {
	return {
		app: state.app
	};
}

function mapDispatchToProps (dispatch) {
	return {
		actions: bindActionCreators(Actions, dispatch)
	};
}


class Menu extends PureComponent {
	render() {
		return (
			<div>
				<ul>
					<li>
						<Link to={'/'}>Home112</Link>
					</li>
					<li>
						<Link to={'/about'}>About</Link>
					</li>
					<li>
						<Link to={'/help'}>Help</Link>
					</li>
				</ul>
			</div>
		);
	}
}


class Home extends PureComponent {

	render() {
		return (
			<div>
				<h1 onClick={() => {
					this.props.actions.initApp('Home_local');
				}
				}>Home</h1>
				<p>app_tag: {this.props.app.tag}</p>
				<Menu />
			</div>
		);
	}
}


class About extends PureComponent {
	render() {
		return (
			<div>
				<h1 onClick={() => {
						this.props.actions.initApp('About_local');}
				}>About</h1>
				<p>app_tag: {this.props.app.tag}</p>
				<Menu />
			</div>
		);
	}
}

class Help extends PureComponent {
	render() {
		return (
			<div>
				<h1 onClick={() => {
						this.props.actions.initApp('Help_local');}
				}>Help</h1>
				<p>app_tag: {this.props.app.tag}</p>
				<Menu />
			</div>
		);
	}
}


export default class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Switch>
					<Route exact path="/" component={ connect(mapStateToProps, mapDispatchToProps)(Home) } />
					<Route path="/about" component={ connect(mapStateToProps, mapDispatchToProps)(About) } />
					<Route path="/help" component={ connect(mapStateToProps, mapDispatchToProps)(Help) } />
				</Switch>
			</div>
		);
	}
}
