import React from 'react';
import PropTypes from 'prop-types';
import {
    HeaderItem,
    HeaderItemNavBtn as NavBtn,
    Dropdown
} from '../header-generics';
import CreateChannelControls from './create-channel-controls/create-channel-controls.component';
import './channel-dash-item.style.css';

const ChannelDashItem = (props)=>{
    const itemId = props.navId || "channel-dash-header-item"
    const open = props.openId === itemId;
    const handleToggle = ()=>{
        props.handleToggle(itemId);
    }
    return (
        <HeaderItem>
            <NavBtn
                open={open}
                onClick={handleToggle}
            >
                <span className="channel-dash-nav-item-text">
                    <i className="fa fa-bolt icon"></i>
                    <span>Channels</span> 
                </span>
            </NavBtn>

            <Dropdown 
            open={open}
            >
                <CreateChannelControls 
                handleSubmit={props.handleNewChannel}
                />
            </Dropdown>
        </HeaderItem>
    )


}

ChannelDashItem.propTypes={
    loading: PropTypes.bool.isRequired,
    openId: PropTypes.string.isRequired,
    navId: PropTypes.string,

    handleToggle: PropTypes.func.isRequired,
    handleNewChannel: PropTypes.func.isRequired
}

export default ChannelDashItem;