import React from 'react';
import PropTypes from 'prop-types';
import { auth } from '../../firebase';
import {
    HeaderItem,
    HeaderItemNavBtn as NavBtn,
    Dropdown
} from '../header-generics';
import CurrentUserInfo from './current-user-info/current-user-info.component';
import SignOutBtn from './sign-out-btn/sign-out-btn.component';
import './user-options-item.style.css';

const UserOptionsHeaderItem = (props)=>{
    const currentUser = auth().currentUser;
    const itemId = props.navId || "user-options-header-item"
    const open = props.openId === itemId;

    const handleToggle = ()=>{
        props.handleToggle(itemId);
    }

    const handleSignOut=()=>{
        auth().signOut();
    }

    return (
        <HeaderItem
        className="user-options-header-item"
        >
            <NavBtn
                open={open}
                onClick={handleToggle}
            >
                <span>
                    <i className="fa fa-user"></i>
                </span>
            </NavBtn>

            <Dropdown 
            open={open}
            >
                <CurrentUserInfo 
                currentUser={currentUser}
                /> 
                <SignOutBtn 
                handleSignOut={handleSignOut}/>
            </Dropdown>
        </HeaderItem>
    )
}

UserOptionsHeaderItem.propTypes={
    openId: PropTypes.string.isRequired,
    navId: PropTypes.string,

    handleToggle: PropTypes.func.isRequired
}

export default UserOptionsHeaderItem;