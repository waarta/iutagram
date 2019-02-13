import { USER_LOGIN, USER_LOGOUT, GET_INFOS_USER } from "../actions/actionUser";

const initialState = {
	jwt: "",
	infosUser: []
};

const user = (state = initialState, action) => {
	switch (action.type) {
		case USER_LOGIN:
			return { ...state, jwt: action.jwt };
		case USER_LOGOUT:
			return { ...state, jwt: null };
		case GET_INFOS_USER:
			return { ...state, infosUser: action.infosUser };
		default:
			return state;
	}
};

export default user;
