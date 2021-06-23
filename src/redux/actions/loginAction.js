import { PROFILE_FETCH_SUCCESS } from "./actionTypes";
import { SignIn } from "../../services";


//action-creator
function profileFetchSuccess(profile) {
    return { type: PROFILE_FETCH_SUCCESS, profile };
}

//thunk
function login(username, password) {
    return async function (dispatch) {
        try {
            debugger;
            const result = await SignIn(username, password);
            debugger;

            if (result) {
                dispatch(profileFetchSuccess(result.profile));
                return result;
            }
            return null;

        } catch (error) {
            alert("Error");

        }
    };
}

export const actions = {
    login
}