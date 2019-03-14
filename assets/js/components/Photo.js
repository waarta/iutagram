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

class Photo extends Component {
	render() {
		let date = this.props.photo.date.split("+")[0].replace("T", " à ");
		return (
			<Modal
				isOpen={this.props.modalIsOpen}
				onAfterOpen={this.afterOpenModal}
				onRequestClose={this.props.closeModal}
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
		);
	}
}

export default connect()(Photo);
