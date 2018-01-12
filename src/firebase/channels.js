import { 
    database as db, auth 
} from './index';

import { objectToArray } from '../functions';
const channels = db.ref("channels");



export default channels;

export const getChannelRef=(channelId)=>{
    return channels.child(channelId)
}

export const getChannelSnap=(channelId)=>{
    return getChannelRef(channelId)
    .once('value')
    .then(channelSnap=>{
        if(!channelSnap.exists()){
            throw Error("No channel found.")
        }
        return channelSnap.val()
    })
}

export const createNewChannel=(channelName)=>{
    const userId = auth().currentUser.uid;
    const key = channels.push().key;
    const newChannel = {
        key,
        creatorId: userId,
        name: channelName || "(Anonymous)",
        messages: 0
    }

    return channels.child(key)
    .set(newChannel)
    .then(success=>newChannel)
}

export const deleteChannel = (channelKey)=>{
    const channelRef = channels.child(channelKey);
    return channelRef.remove()
}

// Only fires once
export const getCurrentMessages=(channelId)=>{
    return getChannelRef(channelId)
    .child('messages').orderByKey().limitToLast(75)
    .once('value')
    .then(snap=>{
        const newList = snap.val();
        return newList ? objectToArray(newList) : [];
    })
}

// fires on any changes to channel message 
export const onMessagesUpdate=(channelId, callback)=>{
    getChannelRef(channelId)
    .child("messages")
    .on("value", 
        (snap)=>{
            const newList = objectToArray( snap.val() );
            callback(newList);
        }
    );
}

export const onAddMessage=(channelId, callback)=>{
    // Get ref to current list
    const messagesRef = getChannelRef(channelId).child("messages");
    const startKey = messagesRef.push().key;

    messagesRef.orderByKey().startAt(startKey)
    .on("child_added", 
        (snap)=>{ callback( snap.val() )}
    );
}

export const onDeleteMessage=(channelId, callback)=>{
    getChannelRef(channelId)
    .child("messages")
    .on("child_removed", 
        (snap)=>{ callback( snap.val() )}
    )
}

export const sendMessage=(channelId, message)=>{
    const userId = auth().currentUser.uid;
    const listRef = getChannelRef(channelId).child("messages");

    const newKey = listRef.push().key;

    const newMessage = {
        key: newKey,
        senderId: userId,
        text: message
    }
    
    const updates = {
        [newKey]: newMessage
    }
    return listRef.update(updates)
}

export const deleteMessage=(channelId, msgKey)=>{
    return getChannelRef(channelId).child("messages")
    .child(msgKey)
    .remove()
}