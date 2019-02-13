import React, { Component } from "react";
import { connect } from "react-redux";

class Miniature extends Component {
	render() {
		return <img className="miniature" src={this.props.photo.url} />;
	}
}

export default connect()(Miniature);
