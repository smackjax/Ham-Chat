import React from 'react';
import './header-item.style.css';

const HeaderItem = (props)=>{
    return (
        <div
        {...props}
        className={"header-item-wrapper " + (props.className || "")}
        >
            {props.children}
        </div>
    )
}

export default HeaderItem;