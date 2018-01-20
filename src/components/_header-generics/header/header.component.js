import React from 'react';
import * as colors from '../colors';
import './header.style.css';


const Header = (props)=>{
    const propsStyles = 
        props.style || {};

    const propsClassName = 
        props.className || "";

    return (
        <header
        className={"main-header " + (props.className || "")}
        >
            <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: "5px",
                ...propsStyles
            }}
            className={ "header-content" + propsClassName }
            >
            {props.children}
            </div>
        </header>
        )
}


export default Header;