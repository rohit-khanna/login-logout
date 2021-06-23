
export const TOKEN_KEY_LOCAL_STORAGE = process.env.REACT_APP_TOKEN_KEY;
export const TOKEN_PROFILE_LOCAL_STORAGE = process.env.REACT_APP_PROFILE_KEY;



export const isAuthenticated = () => {
    const token = getFromLocalStorageAsJSON(TOKEN_KEY_LOCAL_STORAGE);
    // You can also decode the JWT token here to see if its expired or not.
    // and then take a decision

    return token ? true : false
}

export const updateToken = (token) => {
    sendToLocalStorage(TOKEN_KEY_LOCAL_STORAGE, token)
}

export const removeToken = () => {
    removeFromLocalStorage(TOKEN_KEY_LOCAL_STORAGE)
}


export function getFromLocalStorageAsJSON(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function sendToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function removeFromLocalStorage(key) {
    localStorage.removeItem(key);
}
