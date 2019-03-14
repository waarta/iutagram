import React, { Component } from "react";
import { userLogout } from "../actions/actionUser";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import KeyboardTab from "@material-ui/icons/KeyboardTab";
import Face from "@material-ui/icons/Face";

class Header extends Component {
	componentDidMount() {}

	render() {
		return (
			<div className="header">
				<h1>IUTagram</h1>
				<Link className="iconeProfil" to="/me">
					<Face fontSize="large" />
				</Link>
				<KeyboardTab
					className="logout"
					fontSize="large"
					onClick={() => this.props.dispatch(userLogout())}
				/>
			</div>
		);
	}
}
const mapStateToProps = state => ({
	user: state.user
});

export default connect(mapStateToProps)(Header);
