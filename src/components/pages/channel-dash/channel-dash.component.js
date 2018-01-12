import React from 'react';
import PropTypes from 'prop-types';

import { userActions } from '../../api';
import DashHeader from './dash-header/dash-header.component';
import ChannelItem from './channel-item/channel-item.component';
import LoadingSpinner from '../../_loading-spinner/loading-spinner.component';

class ChannelDash extends React.Component{
    state={
        loading: true,
        channels: []
    }

    componentDidMount(){
        userActions.getRecentChannels(this.props.userId)
        .then(channelArray=>{
            this.setState({ channels: channelArray });
        })
        .catch(err=>{
            console.log("Couldn't get recent channels - ", err)
        })
        .then(always=>{
            this.setState({ loading: false })
        })
    }

    render(){
        const {channels, loading} = this.state;

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
                                key={channel.key}
                                name={channel.name}
                                id={channel.key}
                                />
                            )
                        )   
                    ) : (
                        <div style={{
                            padding: "13px",
                            margin: "20px auto",
                            color: "#21219a",
                            maxWidth: "250px",
                            backgroundColor: "#efefef",
                            boxShadow: "0 1px 5px -1px #000"
                        }}>
                            <span>No channels found</span>
                        </div>
                    )
                }
            </div>
        )
    }
    
}

ChannelDash.propTypes={
    userId: PropTypes.string.isRequired
}

export default ChannelDash;