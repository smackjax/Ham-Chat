import React from 'react';
import PropTypes from 'prop-types';
import { auth } from '../../firebase';
import Modal from '../_base-modal/base-modal.component';
import SignOutBtn from './sign-out-btn/sign-out-btn.component';

const UserOptionsModal = (props)=>{
    const currentUser = auth().currentUser;
    const displayInfo = 
        currentUser.displayName || 
        currentUser.email.split("@")[0] || 
        "Sneaky Pete";

    const handleSignOut = ()=>{
        auth().signOut();
    }

    return (
        <Modal
        open={props.open}>
            <div>
                {displayInfo}
            </div>

            <hr />

            <SignOutBtn
            
            handleSignOut={handleSignOut}
            />
        </Modal>
    )
}

UserOptionsModal.propTypes={
    open: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired
}

export default UserOptionsModal;