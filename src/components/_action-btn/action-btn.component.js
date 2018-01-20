import React from 'react';
import actionBtnStyle from './action-btn.styles';

export default ({style, ...rest})=>{
    const propStyle = style || {};
    return (
        <button
        {...rest}
        style={{
            ...actionBtnStyle,
            ...propStyle
        }}
        >
        {props.children}
        </button>
    )
}