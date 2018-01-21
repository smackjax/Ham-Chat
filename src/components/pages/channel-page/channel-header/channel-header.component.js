import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { channels, userActions, getUser } from '../../api';
import Header from '../../_header/header.component';

import { ChannelOptions } from '../../_expandable-btns';
import CopySuccessAlert from './success-alert/success-alert.component';
import CopyModal from './copy-modal/copy-modal.component';
import './channel-header.style.css';

class ViewChannelHeader extends React.Component {

    state={
        ownChannel: false,
        emailing: false,
        deleting: false,
        copyComplete: false,

        copyModalOpen: false,
        copyLink: ""
    }

    componentDidMount(){
        const ownChannel = 
            this.props.channel.creatorId === getUser().uid;
        if(ownChannel) { 
            this.setState({ ownChannel }) 
        }
    }

    handleDelete=()=>{
        const channelKey = this.props.channel.key;
        channels.deleteChannel(channelKey)
        .then(success=>{
            return userActions.removeChannelFromRecent(channelKey);
        })
        .then(success=>{
            this.props.history.push("/channels");
        })
        .catch(err=>{
            console.log("Couldn't delete channel - ", err);
            alert("Could not delete channel.")
        })
    }

    goBack=()=>{
        this.props.history.push("/channels");
    }

    handleCopySuccess=()=>{
        this.setState({ copyComplete: true });
    }
    handleCopyFail=(copyLink)=>{
        this.setState({
            copyLink,
            copyModalOpen: true
        });
    }
    handleAlertClose=()=>{
        this.setState({ copyComplete: false });
    }
    
    handleCloseModal = ()=>{
        this.setState({
            copyModalOpen: false,
            copyLink: ""
        })
    }

    render(){
        return (
            <Header
            style={{
                position: "fixed",
                width: "100%",
                top: "0"
            }}>

                <button
                style={{
                    height: "95%",
                    padding: "5px 10px",
                    background: "rgba(255,255,255,.0)",
                    borderRight: "1px solid rgba(255,255,255,.8)",
                    color: "rgba(255,255,255,.8)"
                }}
                onClick={this.goBack}
                >
                    <i className="fa fa-chevron-left" />
                </button>

                <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    width:"100%",
                    marginLeft: "15px",
                    color: "rgba(0,0,0,.9)"
                }}
                >
                    {this.props.channel.name}
                </div>

                <ChannelOptions
                channel={this.props.channel}
                handleCopySuccess={this.handleCopySuccess}
                handleCopyFail={this.handleCopyFail}
                />

                <CopyModal 
                open={this.state.copyModalOpen}
                copyLink={this.state.copyLink}
                handleClose={this.handleCloseModal}
                />

                { // Renders copy success message
                this.state.copyComplete && (
                    <CopySuccessAlert 
                    handleClose={this.handleAlertClose}
                    />
                )}

            </Header>
        )
    }
}

ViewChannelHeader.propTypes = {
    history: PropTypes.object.isRequired,
    channel: PropTypes.shape({
        name: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired
    }).isRequired,
}

export default withRouter( ViewChannelHeader );