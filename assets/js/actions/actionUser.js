import "@babel/polyfill";

function decodeJWT(raw) {
	const parts = raw.split(".");
	return {
		rawToken: raw,
		headers: JSON.parse(atob(parts[0])),
		payload: JSON.parse(atob(parts[1])),
		signature: parts[2]
	};
}

export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGIN_ERROR = "USER_LOGIN_ERROR";
export const userLogin = (username, password) => async dispatch => {
	try {
		const res = await fetch("http://127.0.0.1:8000/api/login_check", {
			method: "POST",
			body: JSON.stringify({ username, password }),
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			}
		});
		if (200 === res.status) {
			const data = await res.json();
			const token = decodeJWT(data.token);
			localStorage.setItem("jwt", JSON.stringify(token));
			dispatch({
				type: USER_LOGIN,
				jwt: token
			});
		} else dispatch({ type: USER_LOGIN_ERROR, status });
	} catch (error) {
		dispatch({ type: USER_LOGIN_ERROR, error });
	}
};

export const USER_LOGOUT = "USER_LOGOUT";
export const USER_LOGOUT_ERROR = "USER_LOGOUT_ERROR";
export const userLogout = () => async dispatch => {
	try {
		localStorage.removeItem("jwt");
		dispatch({
			type: USER_LOGOUT
		});
	} catch (error) {
		dispatch({ type: USER_LOGOUT_ERROR, error });
	}
};

export const GET_INFOS_USER = "GET_INFOS_USER";
export const GET_INFOS_USER_ERROR = "GET_INFOS_USER_ERROR";
export const getInfosUser = (id, jwt) => async dispatch => {
	try {
		const res = await fetch("/api/users/" + id, {
			headers: {
				Authorization: "Bearer " + jwt
			}
		});
		const json = await res.json();
		console.log("----", json);

		dispatch({ type: GET_INFOS_USER, infosUser: json });
	} catch (error) {
		dispatch({ type: GET_INFOS_USER_ERROR, error });
	}
};
