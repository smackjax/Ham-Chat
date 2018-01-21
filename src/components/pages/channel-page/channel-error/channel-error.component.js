import React from 'react';
import PropTypes from 'prop-types';
import * as colors from '../../_colors';
import actionBtnStyles from '../../../_action-btn/action-btn.styles';
import './channel-error.style.css';

const ChannelError = (props)=>{
    const blockStyle={
        padding: "15px 3px",
        margin: "20px auto 40px",
        width: "95%",
        maxWidth: "330px",
        boxShadow: "0px 1px 5px -1px #222",
        color: "#222",
        backgroundColor: "#fafafa"
    }
    const goBack=()=>{
        props.history.push('/channels');
    }
    return (
        <div 
        className="channel-error-wrapper"
        style={blockStyle}>
            <h3
            className="error-header"
            >
                Couldn't find channel
            </h3> 
            
            <div className="error-msg">
                It might be deleted.
            </div>

            <button 
            onClick={goBack}
            style={{
                ...actionBtnStyles
            }}
            className="go-back-btn"
            >
                <i className="fa fa-chevron-left"></i>
                <span>Go to dash?</span>
            </button>
            <h3>OR</h3>
            <button 
            className="remove-from-recent-btn"
            style={{
                ...actionBtnStyles,
                backgroundColor: "rgb(214,46,46)"
            }}
            onClick={props.handleRemove}>
                <i className="fa fa-trash"></i>
                <span>Remove channel?</span>
            </button>
        </div>
    )
}

ChannelError.propTypes={
    history: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    handleRemove: PropTypes.func.isRequired
}

export default ChannelError;