import { GET_PHOTOS } from "../actions/actionPhoto";

const initialState = {
	photos: []
};

const photos = (state = initialState, action) => {
	switch (action.type) {
		case GET_PHOTOS:
			return { ...state, photos: [...state.photos, action.photos] };
		default:
			return state;
	}
};

export default photos;
