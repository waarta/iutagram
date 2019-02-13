import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Profil extends Component {
	render() {
		return (
			<div>
				<h2>Profil</h2>
				<Link to="/">Home</Link>
			</div>
		);
	}
}

export default connect()(Profil);
