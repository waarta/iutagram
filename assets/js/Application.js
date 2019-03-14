import React, { Component } from "react";
import FilActu from "./components/FilActu";
import FormLogin from "./components/FormLogin";
import { connect } from "react-redux";
import Header from "./components/Header";

class Application extends Component {
	componentDidMount() {}

	render() {
		if (this.props.user.jwt)
			return (
				<div>
					<Header />
					<FilActu />
				</div>
			);
		else
			return (
				<div>
					<h1>IUTagram</h1>
					<FormLogin />
				</div>
			);
	}
}
const mapStateToProps = state => ({
	user: state.user
});

export default connect(mapStateToProps)(Application);
