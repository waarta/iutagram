import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";

const customStyles = {
	content: {
		top: "10%",
		left: "10%",
		right: "10%",
		bottom: "10%"
		//position: "relative"
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
				<p>{this.props.photo.jaimes.length}</p>
				<div className="infosPhoto">
					<img className="photo" src={this.props.photo.url} />
					<div className="commentaires">
						Commentaires{" "}
						{this.props.photo.commentaires.map((c, i) => (
							<p key={i}>
								{c.user.username} : {c.texte} (
								{c.date.split("+")[0].replace("T", " à ")})
							</p>
						))}
					</div>
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
