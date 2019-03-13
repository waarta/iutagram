import React, { Component } from "react";
import FilActu from "./components/FilActu";
import FormLogin from "./components/FormLogin";
import { userLogout, getInfosUser } from "./actions/actionUser";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Application extends Component {
	componentDidMount() {}

	render() {
		if (this.props.user.jwt)
			return (
				<div>
					<div className="header">
						<h1>IUTagram</h1>
						<Link to="/me">Mon Profil</Link>
						<button onClick={() => this.props.dispatch(userLogout())}>
							Log out
						</button>
					</div>
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
