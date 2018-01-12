import React from 'react';
import PropTypes from 'prop-types';
import * as colors from '../colors';
import './dropdown.style.css';

const HeaderItemDropdown = (props)=>{
    return (
        <div 
        style={{
            backgroundColor: colors.light,
            display: props.open ? "flex" : "none"
        }}
        className="header-item-dropdown">
            {props.children}
        </div>
    )
}

HeaderItemDropdown.propTypes = {
    open: PropTypes.bool.isRequired
}

export default HeaderItemDropdown;