import React from "react";
import ReactDOM from "react-dom";
import "../css/app.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import reducer from "./reducers";
import thunk from "redux-thunk";
import Application from "./Application";
import { userLogin, USER_LOGIN } from "./actions/actionUser";

const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
	middleware.push(createLogger());
}

const store = createStore(reducer, applyMiddleware(...middleware));

if (localStorage.getItem("jwt")) {
	const token = JSON.parse(localStorage.getItem("jwt"));
	const tokenExpiresAt = token.payload.exp;
	const currentTimestamp = Date.now() / 1000;
	const threshold = 300;
	if (currentTimestamp + threshold < tokenExpiresAt) {
		store.dispatch({
			type: USER_LOGIN,
			jwt: token
		});
	}
} else store.dispatch(userLogin("zprosacco", "user"));

ReactDOM.render(
	<Provider store={store}>
		<Application />
	</Provider>,
	document.getElementById("app")
);
