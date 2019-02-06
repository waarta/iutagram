import React, { Component } from "react";
import { connect } from "react-redux";

class Miniature extends Component {
	render() {
		console.log("mini", this.props.photo);
		return <img className="miniature" src={this.props.photo.url} />;
	}
}

export default connect()(Miniature);
