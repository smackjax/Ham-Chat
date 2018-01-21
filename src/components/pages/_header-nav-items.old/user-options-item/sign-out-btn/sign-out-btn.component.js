import React from 'react';
import PropTypes from 'prop-types';
import { DropdownBtn } from'../../header-generics';
import './sign-out-btn.style.css';

const SignOutBtn = ({handleSignOut, ...rest})=>{
    
    return (
        <DropdownBtn
        {...rest}
        onClick={handleSignOut}
        >
            <i className="fa fa-sign-out icon"></i> Sign Out
        </DropdownBtn> 
    )
}

SignOutBtn.propTypes = {
    handleSignOut: PropTypes.func.isRequired
}

export default SignOutBtn;