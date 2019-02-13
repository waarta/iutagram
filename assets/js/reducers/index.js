import { combineReducers } from "redux";
import reducerPhoto from "./reducerPhoto";
import reducerUser from "./reducerUser";

export default combineReducers({
	photos: reducerPhoto,
	user: reducerUser
});
