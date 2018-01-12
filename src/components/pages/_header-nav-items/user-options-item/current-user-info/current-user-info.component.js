import React from 'react';
import './current-user-info.style.css';

export default (props)=>{
    const {email, displayName } = props.currentUser;
    const identity = 
        displayName || email.split("@")[0] || "Sneaky Pete";

    return (
        <div className="current-user-info">

            <span>
                <i className="fa fa-user icon"></i>
                {identity}
            </span>
        </div>
    )
}