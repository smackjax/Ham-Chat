import React from 'react';
import PropTypes from 'prop-types';
import { auth } from '../../../firebase';
import ViewChannelHeader from '../channel-header/channel-header.component';
import ChatBox from '../chat-box/chat-box.component';
import Message from '../message-item/message-item.component';
import './view-channel.style.css';

const ViewChannel = (props) => { 
  const user = auth().currentUser;
  return (
    <div
    style={{
      marginTop: "70px"
    }}
    className="view-channel page">
      
      <ViewChannelHeader 
      channel={props.channel}
      />

      { props.messages.map((msgObj)=>{
      return (
        <Message
        key={msgObj.key}
        user={user}
        msgObj={msgObj}
        handleDelete={this.deleteMessage}
        />
      )
      })}

      <ChatBox 
      handleSubmit={props.handleNewMsg}
      />

    </div>
  )
}

ViewChannel.propTypes={
  channel: PropTypes.object.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleNewMsg: PropTypes.func.isRequired
}

export default ViewChannel;

