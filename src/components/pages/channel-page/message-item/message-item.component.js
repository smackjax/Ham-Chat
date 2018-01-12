import React from 'react';
import { auth } from '../../firebase';

import './message-item.style.css';

export default (props)=>{

    const {text, senderId/*, key*/} = props.msgObj;
  
    const user = auth().currentUser;
    const myMessage = (senderId === user.uid) ? 
        "my-message" : "";

    return (
        <div className={"message-list-item " + myMessage}>
            <div className="sender-img">
                <i className="fa fa-user"></i>
            </div>
            <div className="message-text-wrapper">
                
                <div className="sender-text">
                    { user.displayName || user.email.split('@')[0] || "Sir Sneaky"}
                </div>

                <div className="message-text">
                    {text}
                </div>
            </div>
            
        </div>
    )
}