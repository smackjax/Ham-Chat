import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { channels, userActions, getUser } from '../../api';
import { Header, withOpenIdControls } from '../../header-generics';
import {
    ChannelViewItem,
    ChannelDashBtn,
    UserNavItem
} from '../../_header-nav-items';

import './channel-header.style.css';

class ViewChannelHeader extends React.Component {

    state={
        ownChannel: false,
        emailing: false,
        deleting: false
    }

    componentDidMount(){
        const ownChannel = 
            this.props.channel.creatorId === getUser().uid;
        if(ownChannel) { 
            this.setState({ ownChannel }) 
        }
    }

    handleEmail=(address)=>{
        console.log("Email to: ", address);
    }
    handleDelete=()=>{
        const channelKey = this.props.channel.key;
        channels.deleteChannel(channelKey)
        .then(success=>{
            return userActions.removeChannelFromRecent(channelKey);
        })
        .then(success=>{
            this.props.history.push("/channels");
        })
        .catch(err=>{
            console.log("Couldn't delete channel - ", err);
            alert("Could not delete channel.")
        })
    }
    

    render(){

        return (
            <Header
            className="channel-page-nav-header"
            >
                <ChannelViewItem
                channel={this.props.channel}
                ownChannel={this.state.ownChannel}
                handleEmail={this.handleEmail}
                handleDelete={this.handleDelete}

                openId={this.props.openId}
                handleToggle={this.props.toggleOpenId}
                />
                
                <ChannelDashBtn />

                <UserNavItem 
                openId={this.props.openId}
                handleToggle={this.props.toggleOpenId}
                />


            </Header>
        )
    }
}

ViewChannelHeader.propTypes = {
    history: PropTypes.object.isRequired,
    channel: PropTypes.object.isRequired,
    openId: PropTypes.string.isRequired,
    toggleOpenId: PropTypes.func.isRequired
}

export default withRouter( withOpenIdControls(ViewChannelHeader) );