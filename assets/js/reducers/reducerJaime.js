import { LIKE_PHOTO, GET_JAIME } from "../actions/actionJaime";

const initialState = {
	jaimes: []
};

const jaimes = (state = initialState, action) => {
	switch (action.type) {
		case GET_JAIME:
			return { ...state, jaimes: [...state.jaimes, action.jaimes] };
		case LIKE_PHOTO:
			return { ...state, jaimes: [...state.jaimes, action.jaimes] };
		default:
			return state;
	}
};

export default jaimes;
