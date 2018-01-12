import React from 'react';
import PropTypes from 'prop-types';

import LoginInput from '../_login-input/login-input.component';
import './login-controls.style.css';

const LoginControls = (props)=>{
    const handleSubmit=(e)=>{
        e.preventDefault();
        props.confirmSubmit();
    }

    const handleEmail=(e)=>{
        const val = e.target.value;
        props.handleEmail(val);
    }

    const handleDisplayName=(e)=>{
        const val = e.target.value;
        props.handleDisplayName(val);
    }

    const handlePassword=(e)=>{
        const val = e.target.value;
        props.handlePassword(val);
    }

    const handlePasswordConfirm=(e)=>{
        const val = e.target.value;
        props.handlePasswordConfirm(val);
    }



    return (
        <form 
        onSubmit={handleSubmit}
        className="login-controls-form">
            <LoginInput 
            type="email" 
            name="email"
            autoComplete="username email"
            required
            value={props.emailVal}
            onChange={handleEmail}
            placeholder="email"
            className="email"/>

            { // Only rendered if new user
            props.newUser && (
                <LoginInput 
                type="text" 
                name="displayName"
                autoComplete="display-name"
                maxLength="25"
                required
                value={props.displayNameVal}
                onChange={handleDisplayName}
                placeholder="display name"
                className="password-confirm"/>
            )}
            
            <LoginInput 
            type="password" 
            name="password"
            autoComplete="current-password"
            required
            value={props.passwordVal}
            onChange={handlePassword}
            placeholder="password"
            className="password"/>

            { // Only rendered if new user
            props.newUser && (
                <LoginInput 
                type="password" 
                name="passwordConfirm"
                autoComplete="new-password"
                required
                value={props.passwordConfirmVal}
                onChange={handlePasswordConfirm}
                placeholder="confirm password"
                className="password-confirm"/>
            )}

            <div className="login-btns-wrapper">    
                
                <input 
                type="submit"
                className="login-btn"
                value={props.newUser ? "Create new" : "Sign in"}
                />

                <button type="button"
                className="switch-user-type-btn"
                onClick={props.toggleUserType}
                >
                    {props.newUser ? "Existing user" : "New user"}
                </button>

            </div>

        </form>
    )
}

LoginControls.propTypes = {
    newUser: PropTypes.bool.isRequired,

    emailVal: PropTypes.string.isRequired,
    displayNameVal: PropTypes.string.isRequired,
    passwordVal: PropTypes.string.isRequired,
    passwordConfirmVal: PropTypes.string.isRequired,

    handleEmail: PropTypes.func.isRequired,
    handleDisplayName: PropTypes.func.isRequired,
    handlePassword: PropTypes.func.isRequired,
    handlePasswordConfirm: PropTypes.func.isRequired,
    toggleUserType: PropTypes.func.isRequired,
    confirmSubmit: PropTypes.func.isRequired
}

export default LoginControls;
