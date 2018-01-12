import React from 'react';

export default ()=>{
    const loadingStyle={
        position: "fixed",
        left: "50%",
        transform: "translateX(-50%)",
        top: "30%",
        padding: "10px",
        fontSize: "24px",
        color: "rgb(26, 102, 173)",
        backgroundColor: "#fafafa",
        borderRadius: "3px",
        boxShadow: "0 1px 4px -1px #222",
        minWidth: "50px",
        minHeight: "50px"

    }

    return (
        <div
        style={loadingStyle}
        >
            <i className="fa fa-cog fa-spin fa-3x fa-fw"></i>
        </div>
    )
}