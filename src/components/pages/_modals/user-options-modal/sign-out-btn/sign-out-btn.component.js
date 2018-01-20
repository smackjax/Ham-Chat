import React from 'react';
import PropTypes from 'prop-types';
import ActionBtn from '../../action-btn';
import './sign-out-btn.style.css';

const SignOutBtn = ({handleSignOut, ...rest})=>{
    
    return (
        <ActionBtn
        {...rest}
        onClick={handleSignOut}
        >
            <i className="fa fa-sign-out icon" /> Sign Out
        </ActionBtn> 
    )
}

SignOutBtn.propTypes = {
    handleSignOut: PropTypes.func.isRequired
}

export default SignOutBtn;