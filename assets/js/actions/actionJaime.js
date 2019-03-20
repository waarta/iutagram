import "@babel/polyfill";

export const GET_JAIME = "GET_JAIME";
export const GET_JAIME_ERROR = "GET_JAIME_ERROR";
export const getJaimes = (token, idPhoto) => async dispatch => {
	try {
		const res = await fetch("/api/photos/" + idPhoto + "/jaimes/", {
			method: "GET",
			headers: {
				Accept: "application/ld+json",
				"Content-Type": "application/ld+json",
				Authorization: "Bearer " + token
			}
		});
		dispatch({
			type: GET_JAIME
		});
	} catch (error) {
		dispatch({ type: GET_JAIME_ERROR, error });
	}
};

export const LIKE_PHOTO = "LIKE_PHOTO";
export const LIKE_PHOTO_ERROR = "LIKE_PHOTO_ERROR";
export const likePhoto = (token, idPhoto, idUser, value) => async dispatch => {
	let body = {
		valeur: value,
		photo: "/api/photos/" + idPhoto,
		user: "/api/users/" + idUser
	};
	try {
		const res = await fetch("/api/jaimes/", {
			method: "POST",
			headers: {
				Accept: "application/ld+json",
				"Content-Type": "application/ld+json",
				Authorization: "Bearer " + token
			},
			body: JSON.stringify(body)
		});
		if (201 === res.status) {
			dispatch({
				type: LIKE_PHOTO
			});
		} else dispatch({ type: LIKE_PHOTO_ERROR, error });
	} catch (error) {
		dispatch({ type: LIKE_PHOTO_ERROR, error });
	}
};
