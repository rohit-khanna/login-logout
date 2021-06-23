import axios from "axios";
import { getFromLocalStorageAsJSON, TOKEN_KEY_LOCAL_STORAGE } from '../utils';
const randomToken = require('random-token');



export const SignIn = async (username, password) => {

    const API_ENDPOINT = process.env.REACT_APP_AUTH_API_ENDPOINT;

    try {
        const payload = { email: username, password };

        const response = await axios.post(API_ENDPOINT, payload)
        if (response && response.data) {
            return response.data;
        }

        else if (response && response.error) {
            throw new Error(response.error)
        }
        return null;
    } catch (error) {
        return null;
    }
}

export const SignOut = async () => {
    try {
        // TODO: Make Actual APi Call

        return true;
    } catch (error) {
        // alert("Server Error", error)
    }
}


export const FetchStudentReports = async () => {

    const currentToken = getFromLocalStorageAsJSON(TOKEN_KEY_LOCAL_STORAGE);
    console.log("Token Saved in Local Storage", currentToken);

}

export const FetchTeacherReports = async () => {

    const currentToken = getFromLocalStorageAsJSON(TOKEN_KEY_LOCAL_STORAGE);
    console.log("Token Saved in Local Storage", currentToken);

}