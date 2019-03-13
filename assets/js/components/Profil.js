import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getInfosUser } from "../actions/actionUser";

class Profil extends Component {
	componentDidMount() {
		if (this.props.user.jwt)
			this.props.dispatch(
				getInfosUser(
					this.props.user.jwt.payload.id,
					this.props.user.jwt.rawToken
				)
			);
	}
	render() {
		console.log("USER", this.props.user);
		return (
			<div>
				<Link to="/">Home</Link>
				<h2>Profil</h2>
				<p> {this.props.user.infosUser.username}</p>
				<p>
					{" "}
					{this.props.user.infosUser.prenom} {this.props.user.infosUser.nom}
				</p>
			</div>
		);
	}
}
const mapStateToProps = state => ({
	user: state.user
});
export default connect(mapStateToProps)(Profil);
