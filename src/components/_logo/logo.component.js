import React from 'react';
import logoSrc from '../../resources/logo.svg';
import './logo.style.css';
export default (props)=>{
    return (
        <img 
        src={logoSrc}
        alt="Ham Logo"
        className={"logo-img " + (props.className || "")} />
    )
}