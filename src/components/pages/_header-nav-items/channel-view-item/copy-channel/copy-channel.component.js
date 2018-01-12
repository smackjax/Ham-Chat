import React from 'react';
import PropTypes from 'prop-types';
import './copy-channel.style.css';

const CopyChannel = (props)=>{
    const channelLink = 
        `${window.location.origin}/${props.channel.key}`;
    
    return (
        <div className="copy-channel-url">
            <div className="description-text">Link to this channel:</div>
            <a
            href={channelLink}        
            className="channel-text">
                {channelLink}
            </a>
        </div>
    )
}

CopyChannel.propTypes = { 
    channel: PropTypes.object.isRequired
}

export default CopyChannel;