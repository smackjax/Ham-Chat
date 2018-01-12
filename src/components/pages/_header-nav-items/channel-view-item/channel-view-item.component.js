import React from 'react';
import PropTypes from 'prop-types';
import {
    HeaderItem,
    HeaderItemNavBtn,
    Dropdown
} from '../header-generics';

import CopyText from './copy-channel/copy-channel.component.js';
// import EmailTo from './email-to/email-to.component.js';
import DeleteChannel from './delete-channel/delete-channel.component';

import './channel-view-item.style.css';

const ChannelViewItem = (props)=>{
    const itemId = props.navId || "view-channel-header-item"
    const open = props.openId === itemId;
    const handleToggle = ()=>{
        props.handleToggle(itemId);
    }
    
    return (
        <HeaderItem>
            <HeaderItemNavBtn
            open={open}
            onClick={handleToggle}
            >
                <i className="fa fa-share-alt-square channel-view-header-item-icon"></i>
                <span className="channel-nav-name">
                    {props.channel.name}
                </span>

            </HeaderItemNavBtn>

            <Dropdown
            open={open}
            >
                <CopyText 
                channel={props.channel}
                />

                { props.ownChannel && 
                    <DeleteChannel
                    handleDelete={props.handleDelete}
                    />
                }
            </Dropdown>
        </HeaderItem>
    )
}

ChannelViewItem.propTypes = {
    channel: PropTypes.object.isRequired,
    ownChannel: PropTypes.bool.isRequired,
    openId: PropTypes.string.isRequired,
    navId: PropTypes.string,
    handleToggle: PropTypes.func.isRequired,
    handleEmail: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
    
}

export default ChannelViewItem;
