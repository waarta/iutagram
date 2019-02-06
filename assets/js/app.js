import React from "react";
import ReactDOM from "react-dom";
import "../css/app.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import reducer from "./reducers/reducer";
import thunk from "redux-thunk";
import Application from "./Application";

const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
	middleware.push(createLogger());
}

const store = createStore(reducer, applyMiddleware(...middleware));

ReactDOM.render(
	<Provider store={store}>
		<Application />
	</Provider>,
	document.getElementById("app")
);
