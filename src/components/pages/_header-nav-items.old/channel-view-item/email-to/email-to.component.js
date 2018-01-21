import React from 'react';
import PropTypes from 'prop-types';
import {
    DropdownBtn
} from '../../header-generics';
import './email-to.style.css';

const EmailTo = (props)=>{
    const handleEmail = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        props.handleEmail(email);
    }  
    
    return (
        <form
        className="email-to-form"
        onSubmit={handleEmail}>
            <input type="email"
            required
            name="email"
            className="email-to-input"
            />

            <DropdownBtn
            className="email-to-btn"
            >
                <i className="fa fa-envelope"></i>
            </DropdownBtn>
        </form>
    )
}

EmailTo.propTypes={ 
    handleEmail: PropTypes.func.isRequired
}

export default EmailTo;