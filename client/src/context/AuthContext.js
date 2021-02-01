import createDataContext from './createDataContext';

const authReducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		default:
			return state;
	}
};

export const { Provider, Context } = createDataContext(
	authReducer,
	{},
	{ signedIn: false }
);
