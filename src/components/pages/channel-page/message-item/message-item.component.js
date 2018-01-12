import React from 'react';
import { auth } from '../../firebase';

import './message-item.style.css';

export default (props)=>{
    const {text, senderId, displayName} = props.msgObj;
  
    const user = auth().currentUser;

    const senderIdentity = displayName || "Sneaky Pete";
    const myMessage = (senderId === user.uid) ? 
        "my-message" : "";

    return (
        <div className={"message-list-item " + myMessage}>
            <div className="sender-img">
                <i className="fa fa-user"></i>
            </div>
            <div className="message-text-wrapper">
                
                <div className="sender-text">
                    { senderIdentity }
                </div>

                <div className="message-text">
                    {text}
                </div>
            </div>
            
        </div>
    )
}