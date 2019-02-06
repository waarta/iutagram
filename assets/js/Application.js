import React, { Component } from "react";
import Miniature from "./components/Miniature";
import FilActu from "./components/FilActu";

export default class Application extends Component {
	render() {
		return (
			<div>
				<h1>Foobar</h1>
				<FilActu />
			</div>
		);
	}
}
