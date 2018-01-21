import React from 'react';
import PropTypes from 'prop-types';

import actionBtnStyles from '../../../_action-btn/action-btn.styles';
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
            <input type="text"
            id="create-new-channel"
            name="newChannelName"
            required
            maxLength="20"
            placeholder="Channel Name"
            autoComplete="off"
            className="create-channel-input"
            />

            <button
            type="submit"
            style={{
                ...actionBtnStyles,
                marginTop: "5px"
            }}
            >
                <i className="fa fa-plus"></i>
            </button>
        </form>
    )
}

CreateChannel.propTypes = {
    handleSubmit: PropTypes.func.isRequired
}

export default CreateChannel;