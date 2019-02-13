import { USER_LOGIN, USER_LOGOUT } from "../actions/actionUser";

const initialState = {
	jwt: ""
};

const user = (state = initialState, action) => {
	switch (action.type) {
		case USER_LOGIN:
			return { ...state, jwt: action.jwt };
		case USER_LOGOUT:
			return { ...state, jwt: null };
		default:
			return state;
	}
};

export default user;
