import React, { Component } from "react";
import { userLogin } from "../actions/actionUser";
import { connect } from "react-redux";

class FormLogin extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.setLogin = element => {
			this.login = element;
		};
		this.setPassword = element => {
			this.password = element;
		};
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.dispatch(userLogin(this.login.value, this.password.value));
	}

	render() {
		return (
			<div>
				<form ref="form" onSubmit={this.handleSubmit}>
					<input
						ref={this.setLogin}
						type="text"
						name="login"
						value="zprosacco"
					/>
					<input
						ref={this.setPassword}
						type="password"
						name="password"
						value="user"
					/>
					<input type="submit" value="Log in" />
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	jwt: state.jwt
});

export default connect(mapStateToProps)(FormLogin);
