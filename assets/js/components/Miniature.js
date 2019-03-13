import React, { Component } from "react";
import { connect } from "react-redux";
//import Dialog from "@material-ui/core/Dialog";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const customStyles = {
	content: {
		top: "15%",
		left: "15%",
		right: "auto",
		bottom: "auto"
	}
};
Modal.setAppElement("#app");

class Miniature extends Component {
	constructor() {
		super();
		this.state = {
			modalIsOpen: false
		};
		this.openModal = this.openModal.bind(this);
		this.afterOpenModal = this.afterOpenModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	openModal() {
		this.setState({ modalIsOpen: true });
	}

	afterOpenModal() {
		//this.subtitle.style.color = "#100";
	}

	closeModal() {
		this.setState({ modalIsOpen: false });
	}

	render() {
		return this.state.modalIsOpen ? (
			<Modal
				isOpen={this.state.modalIsOpen}
				onAfterOpen={this.afterOpenModal}
				onRequestClose={this.closeModal}
				style={customStyles}
				contentLabel="Photo"
			>
				<img className="" src={this.props.photo.url} />
			</Modal>
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
