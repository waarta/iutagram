import React, { Component } from "react";
import FilActu from "./components/FilActu";
import FormLogin from "./components/FormLogin";
import { userLogout } from "./actions/actionUser";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Application extends Component {
	render() {
		if (this.props.user.jwt)
			return (
				<div>
					<h1>IUTagram</h1>
					<button onClick={() => this.props.dispatch(userLogout())}>
						Log out
					</button>
					<Link to="/me">Mon Profil</Link>
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
