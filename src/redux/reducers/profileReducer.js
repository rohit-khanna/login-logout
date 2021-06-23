import { PROFILE_FETCH_SUCCESS } from "../actions/actionTypes";
import initialState from "./InitialState";

/**
 *  Reducer
 * @param {*} state  
 * @param {*} action 
 */
export default function authorReducer(state = initialState.profile, action) {
    switch (action.type) {
        case PROFILE_FETCH_SUCCESS:
            return action.profile

        default:
            return state;
    }
}

export const selector = {
    fetchProfile: (state) => state.profile ? state.profile : {}
}