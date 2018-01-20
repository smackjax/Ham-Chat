import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import { channels } from '../../api';

import { NewChannel, UserOptions } from '../../_expandable-btns';


import { Header } from '../../header-generics';

import {
    DashNavItem,
    UserNavItem
} from '../../_header-nav-items';
import * as colors from '../../_colors';

import './dash-header.style.css';



class DashHeader extends React.Component {

    state={
        creatingChannel: null
    }


    handleNewChannel=(newName)=>{
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
                
                <NewChannel
                creatingChannel={ this.state.creatingChannel }
                handleNewChannel={this.handleNewChannel}
                />

                <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    fontSize: "20px",
                    width: "50%",
                    
                    color: "rgba(20,20,20,1)"
                }}
                >
                Channels
                </div>

                <UserOptions />

            </Header>
        )
    }

}

DashHeader.propTypes={
    history: PropTypes.object.isRequired,
}

export default withRouter( DashHeader );