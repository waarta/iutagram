import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import Photo from "./Photo";

Modal.setAppElement("#app");

class Miniature extends Component {
	constructor() {
		super();
		this.state = {
			modalIsOpen: false
		};
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	openModal() {
		this.setState({ modalIsOpen: true });
	}

	closeModal() {
		this.setState({ modalIsOpen: false });
	}

	render() {
		return this.state.modalIsOpen ? (
			<Photo
				closeModal={this.closeModal.bind(this)}
				photo={this.props.photo}
				modalIsOpen={this.state.modalIsOpen}
			/>
		) : (
			<img
				onClick={this.openModal}
				className="miniature"
				src={this.props.photo.url}
			/>
		);
	}
}

export default connect()(Miniature);
