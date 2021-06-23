import React, { useState } from 'react';
import './LoginForm.css';
import TextControl from '../textControl';
import { useHistory } from 'react-router-dom';
import { SignIn } from '../../services';
import { sendToLocalStorage, TOKEN_PROFILE_LOCAL_STORAGE, updateToken } from '../../utils';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actions } from '../../redux/actions/loginAction';
import config from '../../config';


function LoginForm({ actions }) {

    const { replace } = useHistory();

    const [state, setstate] = useState({ uName: "", pwd: "" })
    const [error, setError] = useState("")

    const handleStateChange = (e) => {
        const { id, value } = e.currentTarget;
        setstate({ ...state, [id]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const result = await SignIn(state.uName, state.pwd);
        const result = await actions.LogIn(state.uName, state.pwd);

        if (result) {
            const { token, profile } = result;
            updateToken(token);
            //sendToLocalStorage(TOKEN_PROFILE_LOCAL_STORAGE, JSON.stringify(profile));
            setError("")
            switch (profile.role) {
                case config.ROLES.STUDENT: // 
                    debugger;
                    replace("/student")
                    break;
                case config.ROLES.TEACHER:
                    replace("/teacher")
                    break;

                default:
                    break;
            }

        }
        else {
            setError("Incorrect Credentials ")
        }
    }

    return (
        <form className="loginForm" onSubmit={handleSubmit}>
            <TextControl value={state["uName"]} id="uName" onChange={handleStateChange} labelText="User Name" />
            <TextControl value={state["pwd"]} id="pwd" onChange={handleStateChange} labelText="Password" isPassword />
            <button type="submit">Login</button>
            <br />
            <div className="error">{error}</div>
        </form>
    )
}





const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => {
    return {
        actions: {
            LogIn: bindActionCreators(actions.login, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)

