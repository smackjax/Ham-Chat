import React from 'react';
import PropTypes from 'prop-types';
import actionBtnStyles from '../../_action-btn/action-btn.styles';

const absoluteWrapperStyles = {
    ...actionBtnStyles,
    transition: "all .5s linear",
    position: "absolute",
    overflow: "hidden",
    zIndex: "100"
}

const ExpandableIconWrapper = (props)=>{
    const isOpen = props.open;

    // Starting size of absolute div and placeholder
    const startSize = {
        maxWidth: props.startSize.width,
        maxHeight: props.startSize.height
    };

    const wrapperStyleOverides =
        isOpen ? {
            padding: "10px",
            backgroundColor: "rgba(33,33,33,1)",
            maxWidth: "300px",
            maxHeight: "300px",
            zIndex: "200",
        } : {
            ...startSize,
            padding: "0px",
        };

    const propStyles = 
        props.style || {};

    return (
        <div
        style={{
            position: "relative",
            width: startSize.maxWidth,
            height: startSize.maxHeight
        }}
        >
            <div
            style={{
                ...absoluteWrapperStyles,
                ...wrapperStyleOverides,
                ...propStyles
            }}
            >
            {props.children}    
            </div>
        </div>
    )
}

ExpandableIconWrapper.propTypes = {
    open: PropTypes.bool.isRequired,
    startSize: PropTypes.shape({
        width: PropTypes.string.isRequired,
        height: PropTypes.string.isRequired
    }).isRequired
}

export default ExpandableIconWrapper;