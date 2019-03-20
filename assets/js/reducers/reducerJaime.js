import { LIKE_PHOTO } from "../actions/actionJaime";

const initialState = {
	jaime: []
};

const jaime = (state = initialState, action) => {
	switch (action.type) {
		case LIKE_PHOTO:
			return { ...state, jaime: [...state.jaime, action.jaime] };
		default:
			return state;
	}
};

export default jaime;
