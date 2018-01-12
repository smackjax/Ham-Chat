import React from 'react';
import PropTypes from 'prop-types';
import * as colors from '../colors';
import './header-item-nav-btn.style.css';

const HeaderItemNavBtn =  (props)=>{
    const { open, style, ...rest} = props;

    const styles = props.style || {};

    const btnStyle = {
        ...styles,
        backgroundColor: open ? colors.light : colors.dark,
        color: "#efefef" 
    }

    return (
        <button
        {...rest}
        style={btnStyle}
        className={"header-item-nav-btn" + (props.className || "")}
        >
            {props.children}
        </button>
    )
}

HeaderItemNavBtn.propTypes = {
    open: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}

export default HeaderItemNavBtn;