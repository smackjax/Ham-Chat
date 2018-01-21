import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';
import actionBtnStyles from '../../../_action-btn/action-btn.styles';
import './confirm-channel-delete.style.css';

const ConfirmChannelDelete = (props)=>{
    const handleDelete=()=>{
        props.handleDelete(props.channelKey);
        props.handleClose();
    }

    const open = props.open;
    return(
        <Modal 
        open={open} 
        onClose={props.handleClose}
        showCloseIcon={false}
        classNames={{
            modal: "confirm-delete-modal"
        }}
        >
            <div 
            style={{
                backgroundColor: actionBtnStyles.backgroundColor,
                color: actionBtnStyles.color
            }}
            className="warning-header">
                <h3>
                    <i className="fa fa-life-ring"/> &nbsp;
                    Are you sure?
                </h3>
            </div>

            <div className="warning-body">
                <b>This is your channel.</b> <br /> 
                If you delete it, it's gone for good. <br /> 
                Completely gone. *poof*
            </div>

            <div
            className="btn-container"
            >
                <button
                style={{
                    ...actionBtnStyles,
                    backgroundColor: "rgb(220, 68, 68)"
                }}
                className="cancel-delete-btn"
                onClick={props.handleClose}
                > 
                    <i className="fa fa-times" /> Cancel
                </button>

                <button
                style={actionBtnStyles}
                className="confirm-delete-btn"
                onClick={handleDelete}
                > 
                    <i className="fa fa-trash" /> Delete
                </button>
            </div>
        </Modal>
    )
}


ConfirmChannelDelete.propTypes = {
    open: PropTypes.bool.isRequired,
    channelKey: PropTypes.string.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired
}

export default ConfirmChannelDelete;

