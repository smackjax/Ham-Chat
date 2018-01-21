import React from 'react';
import './header.style.css';


const Header = (props)=>{

    const propsStyles = 
        props.style || {};

    const propsClassName = 
        props.className || "";

    return (
        <header
        className={"main-header " + (props.className || "")}
        style={ propsStyles }
        >
            <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: "5px"
            }}
            className={ "header-content" + propsClassName }
            >
            {props.children}
            </div>
        </header>
        )
}


export default Header;