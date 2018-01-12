import React from 'react';
import './login-input.style.css';

export default (props)=>{
    return (
        <input 
        {...props}
        className={"login-input " + (props.className || "")}
        />
    )
}