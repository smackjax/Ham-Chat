import React from 'react';
import PropTypes from 'prop-types';

const Background = (props)=>{
    return (
        <div
        style={{
            position: "fixed",
            left: "0",
            top: "0",
            width: "100%",
            height: "100%",
            backgroundColor: props.color,
            zIndex: "-1000"
        }}
        >
        </div>
    )
}

Background.propTypes={
    color: PropTypes.string.isRequired
}

export default Background;