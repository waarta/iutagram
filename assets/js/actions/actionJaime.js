import "@babel/polyfill";

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
		console.log("RES", res);
		if (201 === res.status)
			dispatch({
				type: LIKE_PHOTO
			});
		else dispatch({ type: LIKE_PHOTO_ERROR, error });
	} catch (error) {
		dispatch({ type: LIKE_PHOTO_ERROR, error });
	}
};
