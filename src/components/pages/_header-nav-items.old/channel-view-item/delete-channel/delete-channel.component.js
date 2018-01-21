import React from 'react';
import PropTypes from 'prop-types';
import { DropdownBtn } from '../../header-generics';
import './delete-channel.style.css';

const DeleteChannel = (props)=>{
    return (
        <DropdownBtn
        className="delete-channel-btn"
        onClick={ props.handleDelete }
        >
            <i className="fa fa-trash icon"></i>
            <span>Delete Channel</span>
        </DropdownBtn>
    )
}

DeleteChannel.propTypes={ 
    handleDelete: PropTypes.func.isRequired
}

export default DeleteChannel;