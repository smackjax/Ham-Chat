import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import {  channels, userActions } from '../../api';

import LoadingSpinner from '../../_loading-spinner/loading-spinner.component';
import ChannelError from './channel-error/channel-error.component';
import ViewChannel from './view-channel/view-channel.component';

export default  class ChannelPage extends React.Component{
    static propTypes={
        user: PropTypes.object,
        match: PropTypes.object.isRequired,
    }
    
    state={
        loading: true,
        channel: false,
        channelError: false,
        messages: []
    }

    componentDidMount(){
        // Gets channel name from route params
        const channelKey = 
            this.props.match.params.channelName;

        // If no channel name found, abort
        if(!channelKey){
            this.setError(true);
            return;
        }

        // Holds channel(if found)
        let channel = null;
        let messages = [];

        // Check for channel
        channels.getChannelSnap(channelKey)
        // Save channel obj to add to state
        .then(channelSnap=>{
            const {messages, ...rest} = channelSnap;
            channel = {...rest};
            return channelSnap;
        })
        // Add to user's recent channels
        .then(channelSnap=>(
             userActions.addChannelToRecent(channelSnap)
        ))
        // Get current messages
        .then(success=>(
            channels.getCurrentMessages(channelKey)
            .then(currentMessages=>{           
                messages = currentMessages;
                return currentMessages;
            })
        ))
        // Add Listeners
        .then(retrievedCurrent=>(
            channels.onAddMessage(channelKey, this.addMessage)
        ))
        .then(success=>(
            channels.onDeleteMessage(channelKey, this.deleteMessage)            
        ))
        // Catch errors
        .catch(err=>{
            console.log("Problem in channel-page didMount -- ", err);
            this.setError(true);
        })
        // Update state
        .then(always=>{
            this.setState({
                channel,
                messages,
                loading: false
            })
        })
    }

    componentDidUpdate(){
        const bottomOfPage = document.body.scrollHeight;
        window.scrollTo(0, bottomOfPage);
    }
    
    setLoading=(loading)=>{
        this.setState({ loading });
    }
    setError=(isError)=>{
        return new Promise((resolve, reject)=>{
            this.setState({channelError: isError}, ()=>{
                resolve();
            });
        })   
    }

    updateMessages=(messages)=>{
        return new Promise((resolve, reject)=>{
            this.setState({ messages }, 
            ()=>{ resolve(true) });
        })
    }

    addMessage=(newMsg)=>{
        const newList = [...this.state.messages, newMsg];
        this.updateMessages(newList);
    }

    deleteMessage=(deletedMessage)=>{
        const newList = this.state.messages
        .filter( msg=>msg.key !== deletedMessage.key );
        this.updateMessages(newList);
    }

    sendNewMsg= async (text)=>{
        try {
            const success = await channels.sendMessage(
                this.state.channel.key,
                text
            )
            return success;
        } catch(err) {
            console.log("Couldn't send message - ", err);
            this.setError(true)
        }
    }

    removeChannelFromRecent=()=>{
        const channelId = 
            this.props.match.params.channelName;
        userActions.removeChannelFromRecent(channelId)
        .then(success=>{
            this.props.history.push('/channels');
        })
        .catch(err=>{});
    }

    render(){
        
        if(this.state.channelError) {
            const id = this.props.match.params.channelName;
            return (
                <ChannelError
                history={this.props.history}
                handleRemove={this.removeChannelFromRecent}
                id={id}
                />
            )
        }

        if(this.state.loading) {
            return <LoadingSpinner />
        }

        if(!this.state.channel) {
            return <Redirect to="/channel-dash" />
        }

        return(
            <ViewChannel
            channel={this.state.channel}
            messages={this.state.messages}
            handleNewMsg={this.sendNewMsg}
            />
        )
    }    
}
