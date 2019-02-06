import React, { Component } from "react";
import { connect } from "react-redux";
import { getPhotos } from "../actions/actionPhoto";
import Miniature from "./Miniature";

class FilActu extends Component {
	componentDidMount() {
		this.props.dispatch(getPhotos());
	}

	render() {
		if (this.props.photos.photos[0] != undefined)
			return (
				<div>
					{this.props.photos.photos[0].map((photo, i) => (
						<Miniature key={i} photo={photo} />
					))}
				</div>
			);
		else return <div>wait</div>;
	}
}

const mapStateToProps = state => ({
	photos: state.photos
});
export default connect(mapStateToProps)(FilActu);
