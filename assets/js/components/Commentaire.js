import React, { Component } from "react";
import { connect } from "react-redux";

class Commentaire extends Component {
	render() {
		return (
			<div className="commentaires">
				Commentaires{" "}
				{this.props.commentaires.map((c, i) => (
					<p key={i}>
						{c.user.username} ({c.date.split("+")[0].replace("T", " à ")}) :{" "}
						{c.texte}
					</p>
				))}
			</div>
		);
	}
}

export default connect()(Commentaire);
