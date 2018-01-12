import React from 'react';
import { withRouter } from 'react-router-dom';
import { colors } from '../header-generics';
import './channel-dash-btn.style.css';


export default withRouter( (props) =>{

    const toDash = ()=>{
        props.history.push("/channels")
    }

    return (
        <button
        onClick={toDash}
        style={{
            backgroundColor: colors.dark, 
            color: "#efefef"
        }}
        className="channel-dash-nav-btn"
        >
            <i className="fa fa-home"></i>
            <i className="fa fa-bolt"></i>
        </button>
    )
})