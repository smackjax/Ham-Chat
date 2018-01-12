import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import { channels } from '../../api';

import {
    Header, withOpenIdControls
} from '../../header-generics';

import {
    DashNavItem,
    UserNavItem
} from '../../_header-nav-items';

import './dash-header.style.css';



class DashHeader extends React.Component {

    state={
        creatingChannel: false
    }


    handleCreateChannel=(newName)=>{
        this.setState({ creatingChannel: true })

        channels.createNewChannel(newName)
        .then(newChannel=>{
            // Navigate to new channel page
            const newPath = "/channels/" + newChannel.key;
            this.props.history.push(newPath);
        })
        .catch(err=>{
            console.log("Couldn't create channel -", err);
        })
        .then(always=>{
            this.setState({ creatingChannel: false })
        })
    }

    render() {
        
        return(
            <Header>
                
                <DashNavItem
                    loading={this.state.creatingChannel}
                    openId={this.props.openId}
                    handleToggle={this.props.toggleOpenId}
                    handleNewChannel={this.handleCreateChannel}
                />

                <UserNavItem 
                    openId={this.props.openId}
                    handleToggle={this.props.toggleOpenId}
                />
                
            </Header>
        )
    }

}

DashHeader.propTypes={
    history: PropTypes.object.isRequired,
    openId: PropTypes.string.isRequired,
    toggleOpenId: PropTypes.func.isRequired,
    clearOpenId: PropTypes.func.isRequired
}

export default withRouter(withOpenIdControls(DashHeader));

