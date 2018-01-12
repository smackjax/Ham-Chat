import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './channel-item.style.css';

const ChannelItem = (props)=>{
    return (
        <NavLink 
        to={"/channels/" + props.id}
        className="channel-item">
            <i className="fa fa-bolt"></i>
            <span className="channel-name">
                {props.name}
            </span>
            <span
            className="edit-span"
            >
                <i className="fa fa-chevron-right"></i>
            </span>
        </NavLink>
    )
}

ChannelItem.propTypes={
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}

export default ChannelItem;