import React from 'react';
import PropTypes from 'prop-types';

const backdropStyles = {
    position:"fixed",
    height: "100%",
    width: "100%",
    top: "0",
    left: "0",
    backgroundColor: "rgba(255,255,255,0)",
    zIndex: "-100"
}

const Backdrop = (props)=>{
    return (
        <div 
        style={backdropStyles}
        onClick={props.onClick}
        >
        </div>
    )
}

Backdrop.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default Backdrop;