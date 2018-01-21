import React from 'react';
import PropTypes from 'prop-types';

import { auth } from '../firebase';
import { userActions, channels } from '../../api';

import DashHeader from './dash-header/dash-header.component';
import ChannelItem from './channel-item/channel-item.component';
import ConfirmDeleteModal from './confirm-channel-delete/confirm-channel-delete.component';

import LoadingSpinner from '../../_loading-spinner/loading-spinner.component';
import * as colors from '../_colors';

class ChannelDash extends React.Component{
    state={
        loading: true,
        channels: [],
        modalOpen: false,
        channelKeyToDelete: ""
    }

    componentDidMount(){
        userActions.getRecentChannels(this.props.userId)
        .then(channelArray=>{
            const userId = auth().currentUser.uid;
            this.setState({ 
                channels: channelArray,
                userId
            });
        })
        .catch(err=>{
            console.log("Couldn't get recent channels - ", err)
        })
        .then(always=>{
            this.setState({ loading: false })
        })
    }

    updateChannels=(channels)=>{
        this.setState({ channels })
    }

    removeChannelByKey=(channelKey)=>{
        const channels = 
                this.state.channels.filter(
                    channel=>channel.key !== channelKey
                );
        this.updateChannels(channels);
    }

    handleUserCreatedChannelDelete=(channelKey)=>{
        channels.deleteChannel(channelKey)
        .then(success=>{
            return userActions.removeChannelFromRecent(channelKey);
        })
        .then(success=>{
            this.removeChannelByKey(channelKey)
        })
        .catch(err=>{
            console.log("Couldn't delete channel - ", err);
            alert("Couldn't delete channel.")
        })
    }

    handleRemoveFromRecent=(channelKey)=>{
        return userActions.removeChannelFromRecent(channelKey)
        .then(success=>{
            this.removeChannelByKey(channelKey);
        })
        .catch(err=>{
            console.log("Couldn't delete channel - ", err);
            alert("Couldn't remove channel from recent.")
        })
    }

    handleDelete=(channelKey)=>{
        const userId = auth().currentUser.uid;
        const channel = this.state.channels.filter(
            channel=>channel.key === channelKey
        )[0];
        if(channel){
            if(channel.creatorId === userId){
                this.setState({
                    modalOpen: true,
                    channelKeyToDelete: channelKey
                })
            } else {
                this.handleRemoveFromRecent(channelKey)
            }
        } else {
            alert("Could not find channel to delete");
        }
    }

    handleCloseModal=()=>{
        this.setState({ modalOpen: false })
    }

    render(){
        const { channels, loading } = this.state;

        if(loading){
            return <LoadingSpinner />
        }

        return (
            <div className="channel-list">
                <DashHeader />

                {  channels.length > 0 ? (
                        channels.map(
                            (channel)=>(
                                <ChannelItem
                                key={ channel.key }
                                isOwned={ channel.creatorId === this.state.userId }
                                channel={ channel }
                                handleDelete={ this.handleDelete }
                                />
                            )
                        )   
                    ) : (
                        <div style={{
                            padding: "13px",
                            margin: "20px auto",
                            color: colors.primary,
                            maxWidth: "250px",
                            backgroundColor: "#efefef",
                            boxShadow: "0 1px 5px -1px #000"
                        }}>
                            <span>No channels found</span>
                        </div>
                    )
                }

                <ConfirmDeleteModal 
                open={this.state.modalOpen}
                channelKey={ this.state.channelKeyToDelete }
                handleDelete={ this.handleUserCreatedChannelDelete  }
                handleClose={ this.handleCloseModal }
                />
            </div>
        )
    }
    
}

ChannelDash.propTypes={
    userId: PropTypes.string.isRequired
}

export default ChannelDash;