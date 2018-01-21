import React from 'react';
import PropTypes from 'prop-types';

import * as colors from '../../../_colors';
import actionBtnStyles from '../../../../_action-btn/action-btn.styles';
import './channel-edit-controls.style.css';

const ChannelEditControls = (props) => {
    const translatePostion =    
        props.editing ?
            "0%" : "101%";
    return (
        <div
        style={{
            borderLeft: "5px solid " + colors.primary,
            transform: `translateX(${translatePostion})` 
        }}
        className="channel-edit-wrapper"
        >
            <button
            style={{
                ...actionBtnStyles,
                padding: "5px 9px"
            }}
            className="delete-channel-btn"
            onClick={props.handleDelete}
            >
                <i className="fa fa-trash" />
            </button>

            <input type="text"
            readOnly
            disabled
            defaultValue={ props.channelName }
            placeholder={ props.channelName }
            style={{
                fontSize: "16px"
            }}
            className="change-name-input"
            />
            
            <button
            className="close-controls-btn"
            onClick={props.handleToggle}
            >
                <i className="fa fa-close" />
            </button>
        </div>
    )
}

ChannelEditControls.propTypes = {
    editing: PropTypes.bool.isRequired,
    channelName: PropTypes.string.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired
}

export default ChannelEditControls;