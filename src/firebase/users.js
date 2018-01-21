import { database as db, auth } from './index';
import { objectToArray } from '../functions';
const users = db.ref("users");


export default users;

export const addChannelToRecent=(newChannel)=>{
    const userId = auth().currentUser.uid;
    return users.child(userId)
        .child("channels")
        .child(newChannel.key)
        .set({
            creatorId: newChannel.creatorId,
            key: newChannel.key, 
            name: newChannel.name || "(Anonymous)"
        })
}

export const getRecentChannels=(userId)=>{
    return users.child(userId).child("channels")
    .once('value')
    .then(snap=>{
        const channels = snap.val();
        return channels ? 
            objectToArray(channels) : []
    })
}

export const removeChannelFromRecent=(channelKey)=>{
    const userId = auth().currentUser.uid;
    return  users.child(userId)
        .child("channels")
        .child(channelKey)
        .remove()
}