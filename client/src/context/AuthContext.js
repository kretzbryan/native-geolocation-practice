import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		default:
			return state;
	}
};

const signup = (dispatch) => {
	return async ({ email, password }) => {
		try {
			const res = trackerApi.post('signup', { email, password });
		} catch (err) {}
	};
};

const signin = (dispatch) => {
	return async ({ email, password }) => {
		try {
			let res;
		} catch (err) {}
	};
};

const signout = (dispatch) => {
	return async ({ email, password }) => {
		try {
			let res;
		} catch (err) {}
	};
};

export const { Provider, Context } = createDataContext(
	authReducer,
	{ signup, signin, signout },
	{ signedIn: false }
);
