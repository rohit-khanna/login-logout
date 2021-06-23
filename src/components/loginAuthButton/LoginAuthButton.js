import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { SignOut } from '../../services';
import { isAuthenticated, removeFromLocalStorage, removeToken, TOKEN_PROFILE_LOCAL_STORAGE } from '../../utils';
import './loginAuthButton.css';

const LoginAuthButton = ({ history }) => {

    return isAuthenticated() ? (
        <span className="LinkButton">
            Welcome!{" "}
            <button
                className="button"
                onClick={async () => {
                    const isSuccess = await SignOut();
                    if (isSuccess) {
                        removeToken();
                        removeFromLocalStorage(TOKEN_PROFILE_LOCAL_STORAGE)
                    }
                    history.push("/login")
                }}
            >
                <h5>Sign Out</h5>
            </button>
        </span >
    ) : (
        <Link to="/login" >
            <h5>Login</h5>
        </Link>
    )

}

export default withRouter(LoginAuthButton)
