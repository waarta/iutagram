import { combineReducers } from "redux";
import reducerPhoto from "./reducerPhoto";
import reducerUser from "./reducerUser";
import reducerJaime from "./reducerJaime";

export default combineReducers({
	photos: reducerPhoto,
	user: reducerUser,
	jaime: reducerJaime
});
