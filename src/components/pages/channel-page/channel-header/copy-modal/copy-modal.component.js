import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';
import actionBtnStyles from '../../../../_action-btn/action-btn.styles';

const Copymodal = (props)=>{
    return (
    <Modal
    open={props.open}
    onClose={props.handleClose}
    >   
        
        <h4>This browser doesn't support copying.</h4>
        <h3>Bummer.</h3>

        <div
        style={{margin: "15px 0"}}>
            Please copy the link below, then send it however you want!
        </div>

        <a
        href={props.copyLink}
        style={{
            display: "block",
            width: "98%",
            margin: "15px auto",
            fontSize: "14px",
            padding: "10px",
            backgroundColor: "rgb(245,245,245)",
            color: "rgb(20,20,20)"
        }}>
            {props.copyLink}
        </a>

        <button
        onClick={props.handleClose}
        style={{
            ...actionBtnStyles,
            display: "block",
            marginTop: "20px",
            marginLeft: "auto"
        }}
        >
        <i className="fa fa-times"/> Close
        </button>
    </Modal>
    )
}

Copymodal.propTypes={
    open: PropTypes.bool.isRequired,
    copyLink: PropTypes.string.isRequired,
    handleClose: PropTypes.func.isRequired,
}

export default Copymodal;