import "@babel/polyfill";

export const GET_PHOTOS = "GET_PHOTOS";
export const GET_PHOTOS_ERROR = "GET_PHOTOS_ERROR";
export const getPhotos = () => async dispatch => {
	try {
		const res = await fetch("http://127.0.0.1:8000/api/photos/");
		const json = await res.json();
		dispatch({
			type: GET_PHOTOS,
			photos: json["hydra:member"]
		});
	} catch (error) {
		dispatch({ type: GET_PHOTOS_ERROR, error });
	}
};
