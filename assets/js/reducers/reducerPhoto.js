import { GET_PHOTOS } from "../actions/actionPhoto";
import { combineReducers } from "redux";

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

export default combineReducers({ photos });
