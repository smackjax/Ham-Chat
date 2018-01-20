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

import * as colors from '../_colors';
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
        style={{
            backgroundColor: open ? colors.darkGray : "" 
        }}
        className="user-options-header-item"
        >
            <NavBtn
                style={{

                }}
                open={open}
                onClick={handleToggle}
            >
                <i 
                style={{ marginRight: open ? "8px" : "" }}
                className="fa fa-user" />
                { open && (
                    <span>
                        { // If open, get user display name
                        currentUser.displayName || 
                        currentUser.email.split("@")[0] || 
                        "Sneaky Pete"
                        }
                    </span>
                )}
            </NavBtn>

            <Dropdown 
            open={open}
            >
                <SignOutBtn
                style={{
                    marginTop: "10px",
                    backgroundColor: colors.primary,            
                }}
                
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