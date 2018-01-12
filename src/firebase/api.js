import { auth } from './index';

import channelsRef from './channels';
import * as channels from './channels' ;
import usersRef from './users';
import * as userActions from './users';

const getUser = ()=>{
    return auth().currentUser;
}

export {
    usersRef,
    userActions,
    channelsRef, 
    channels,

    getUser
};
