import React from 'react';
import PropTypes from 'prop-types';

import ExpandableIconWrapper from '../_expandable-icon-wrapper/wrapper.component';
import Backdrop from '../_backdrop/backdrop.component';
import CreateChannelControls from './create-channel-controls/create-channel-controls.component';

import startSize from '../start-size';
import * as colors from '../../../_colors';

class ExpandableNewChannel extends React.Component {
    state={
        isOpen: false,
        usernameString: ""
    }

    handleToggle = () => {
        const isOpen = !this.state.isOpen;
        this.setState({ isOpen });    
    }

    render(){
        const isOpen = this.state.isOpen;
        
        return(
            <ExpandableIconWrapper
            open={isOpen}
            startSize={startSize}
            style={{
                top:"0px", 
                left: "0px"
            }}
            >

                <button
                style={{
                    backgroundColor: "rgba(30,30,30,0)",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",

                    fontSize: "18px",
                    paddingLeft: isOpen ? "" : "3px", 

                    minWidth: startSize.width,
                    minHeight: startSize.height,
                    
                    color: colors.lightText,

                    whiteSpace: "nowrap",
                    overflow: "hidden",
                }}
                disabled={isOpen}
                onClick={this.handleToggle}
                >

                    <i 
                    style={{
                        fontSize: "25px",
                        marginLeft: "10px"
                    }}
                    className="fa fa-plus"/>

                    <span
                    style={{
                        transition: "color .5s",
                        marginLeft: "7px",
                        color: isOpen ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)" 
                    }}
                    >
                        New Channel
                    </span>
                </button>

                <CreateChannelControls 
                handleSubmit={this.props.handleNewChannel}
                />

                { // Renders backdrop to 'close' item if open
                isOpen && ( 
                    <Backdrop onClick={this.handleToggle} />
                )}

            </ExpandableIconWrapper>
        )
    }
}

ExpandableNewChannel.propTypes = {
    handleNewChannel: PropTypes.func.isRequired
}

export default ExpandableNewChannel;