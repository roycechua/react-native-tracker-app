import CreateDataContext from "./createDataContext";
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const signup = (dispatch) => {
    return ({ email, password }) => {
        

    };
};

const signin = (dispatch) => {
    return ({ email, password }) => {
        // Try to signin
        // Handle success by updating state
        // Handle failure by showing error message (somehow)
    };
};

const signout = (dispatch) => {
    return () => {
        // somehow sign out!!!
    }
}


export const { Provider, Context } = CreateDataContext(
    authReducer,
    { signin, signout, signup},
    { isSignedIn: false }
);
