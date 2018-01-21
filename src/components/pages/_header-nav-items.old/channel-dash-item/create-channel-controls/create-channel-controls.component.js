import React from 'react';
import PropTypes from 'prop-types';
import { DropdownBtn } from '../../header-generics';
import './create-channel-controls.style.css';

const CreateChannel =  (props)=>{
    const handleCreateNew=(e)=>{
        e.preventDefault();
        const newChannelName = e.target.newChannelName.value;
        e.target.reset();
        props.handleSubmit(newChannelName);
    }
    return (
        <form
        onSubmit={handleCreateNew}
        className="create-channel-wrapper"
        >
            <label htmlFor="create-new-channel"
            className="create-channel-text">
                <i className="fa fa-plus icon"></i>
                <span>Create channel</span>
            </label>
            <input type="text"
            id="create-new-channel"
            name="newChannelName"
            required
            maxLength="25"
            placeholder="Channel Name"
            autoComplete="off"
            className="create-channel-input"
            />

            <DropdownBtn
            className="create-new-channel-confirm"
            >
                <i className="fa fa-plus"></i>
            </DropdownBtn>
        </form>
    )
}

CreateChannel.propTypes = {
    handleSubmit: PropTypes.func.isRequired
}

export default CreateChannel;