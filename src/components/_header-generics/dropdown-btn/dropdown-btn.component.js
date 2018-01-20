import React from 'react';
import * as colors from '../colors';
import './dropdown-btn.style.css';

export default (props)=>{
    const styles = props.style || {};
    const btnStyle ={
        ...styles,
        backgroundColor: colors.primary,
        color: colors.lightText
    };

    return (
        <button
        {...props}
        style={ btnStyle }
        className={"header-dropdown-btn " + (props.className || "")}>
            {props.children}
        </button>
    )
}