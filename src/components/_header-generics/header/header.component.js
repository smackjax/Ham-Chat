import React from 'react';
import * as colors from '../colors';
import './header.style.css';


const Header = (props)=>{    
    return (
        <header 
        style={{backgroundColor: colors.dark}}
        className={"main-header " + (props.className || "")}
        >
            <div
            className="header-content"
            >
            {props.children}
            </div>
        </header>
        )
}


export default Header;