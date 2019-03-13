import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import Favorite from "@material-ui/icons/Favorite";
import Commentaire from "./Commentaire";

const customStyles = {
	content: {
		top: "15%",
		left: "20%",
		right: "20%",
		bottom: "15%"
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
		let date = this.props.photo.date.split("+")[0].replace("T", " à ");
		return this.state.modalIsOpen ? (
			<Modal
				isOpen={this.state.modalIsOpen}
				onAfterOpen={this.afterOpenModal}
				onRequestClose={this.closeModal}
				style={customStyles}
				contentLabel="Photo"
			>
				<p className="username">
					{this.props.photo.user.username} - {date}
				</p>
				<p className="descriptionPhoto">{this.props.photo.description}</p>
				<p>
					{this.props.photo.jaimes.length} <Favorite fontSize="small" />
				</p>
				<div className="infosPhoto">
					<img className="photo" src={this.props.photo.url} />

					<Commentaire commentaires={this.props.photo.commentaires} />
				</div>
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
