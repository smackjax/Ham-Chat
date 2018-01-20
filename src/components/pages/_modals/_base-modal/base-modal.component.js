import React from 'react';
import PropTypes from 'prop-types';
import ReactResponsiveModal from 'react-responsive-modal';
import './base-modal-animation.css';

// Generic base modal
const Modal = (props)=>{
    const animationClassNames={
        transitionEnter: 'modal-enter',
        transitionEnterActive: 'modal-enter-active',
        transitionExit: 'modal-exit',
        transitionExitActive: 'modal-exit-active',
    }

    return (
        <ReactResponsiveModal 
        {...props}
        classNames={ animationClassNames }
        animationDuration={400}
        >
            {props.children}
        </ReactResponsiveModal>
    )
}


Modal.propTypes={
    open: PropTypes.bool.isRequired
}

export default Modal;