import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import ChannelEditControls from './channel-edit-controls/channel-edit-controls.component';

import * as colors from '../../_colors';
import './channel-item.style.css';

class ChannelItem extends React.Component {
    state={
        editing: false
    }

    handleToggle=()=>{
        const editing = !this.state.editing;
        this.setState({ editing });
    }
    
    handleDelete=()=>{
        this.props.handleDelete(this.props.channel.key);
    }

    render(){
        const isOwned = this.props.isOwned;
        return (
            <div
            style={{
                position: "relative"
            }}
            className="channel-item"
            >
                <NavLink
                style={{
                    color: colors.primary
                }}
                className="channel-item-link"
                to={"/channels/" + this.props.channel.key}
                >
                    <div
                    style={{
                        backgroundColor: colors.primary,
                        color: colors.lightText
                    }}
                    className="channel-item-icon"
                    >
                        <i className="fa fa-bolt" />
                    </div>
                    
                    <div
                    className="channel-name">
                        {isOwned ? "*" : ""} 
                        {this.props.channel.name}
                    </div>
                </NavLink>

                <button
                className="channel-edit-btn"
                style={{
                    color: colors.primary
                }}
                onClick={this.handleToggle}
                >
                    <i className="fa fa-ellipsis-v" />
                </button>
                
                <ChannelEditControls
                editing={this.state.editing}
                channelName={ this.props.channel.name }
                handleDelete={this.handleDelete}
                handleToggle={ this.handleToggle }
                />
            </div>
        )
    }
}

ChannelItem.propTypes={
    isOwned: PropTypes.bool.isRequired,    
    channel: PropTypes.shape({
        creatorId: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired
    }).isRequired,
    handleDelete: PropTypes.func.isRequired
}

export default ChannelItem;