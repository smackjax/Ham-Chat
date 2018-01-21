import React from 'react';
import PropTypes from 'prop-types';
import * as colors from '../../_colors';
import './message-item.style.css';

const MessageItem = (props)=>{
    const {text, senderId, displayName} = props.msgObj;
    const user = props.user;

    const senderIdentity = displayName || "Sneaky Pete";
    const myMessage = (senderId === user.uid) ? 
        "my-message" : "";

    return (
        <div 
        className={"message-list-item " + myMessage}
        >
            
            <div 
            style={{
                backgroundColor: "#fff",
                border:"1px solid " + colors.primary,
                color: colors.primary,
                borderRadius: "10px"
            }}
            className="sender-img"
            >
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

MessageItem.propTypes={
    msgObj: PropTypes.shape({
        text: PropTypes.string.isRequired,
        senderId: PropTypes.string.isRequired,
        displayName: PropTypes.string.isRequired,
    }),
    user: PropTypes.shape({
        uid: PropTypes.string.isRequired
    })
}

export default MessageItem;