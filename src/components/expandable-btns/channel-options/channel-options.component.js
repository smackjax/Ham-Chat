import React from 'react';
import PropTypes from 'prop-types';
import ExpandableIconWrapper from '../_expandable-icon-wrapper/wrapper.component';
import Backdrop from '../_backdrop/backdrop.component';

import startSize from '../start-size';
import actionBtnStyles from '../../_action-btn/action-btn.styles';
import * as colors from '../../../_colors';

class ExpandableChannelOptions extends React.Component {
    state={
        isOpen: false
    }

    handleToggle = () => {
        const isOpen = !this.state.isOpen;
        this.setState({ isOpen });    
    }


    handleCopy = ()=>{
        const link = `${ window.location.host }/channels/${this.props.channel.key}`;
        try{
            if(document.execCommand){
                var holder = document.createElement("input");
                document.getElementsByTagName("body")[0].appendChild(holder);
                holder.value = link;
                holder.select();
                document.execCommand("copy");
                holder.remove();
                
                this.setState({ isOpen: false }, 
                    ()=>{
                        this.props.handleCopySuccess();
                    }
                )
            } else {
                throw Error("No execCommand");
            }
        } catch(err) {
            this.setState({ isOpen: false }, 
                ()=>{
                    this.props.handleCopyFail(link);
                }
            )
            console.log(err);
        }
    }


    render(){
        const isOpen = this.state.isOpen;
        return(
            <ExpandableIconWrapper
            open={isOpen}
            startSize={startSize}
            style={{
                top:"0px", 
                right: "0px"
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
                    className="fa fa-share-alt-square"/>

                    <span
                    style={{
                        transition: "color .5s",
                        marginLeft: "7px",
                        color: isOpen ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)" 
                    }}
                    >
                        Share channel
                    </span>
                </button>


                <button
                style={{
                    ...actionBtnStyles,
                    marginTop: "10px",
                    minWidth: "120px"
                }}
                onClick={this.handleCopy}
                >
                    <i className="fa fa-copy" /> Copy link
                </button>



                { // Renders backdrop to 'close' item if open
                isOpen && ( 
                    <Backdrop onClick={this.handleToggle} />
                )}

            </ExpandableIconWrapper>
        )
    }
}

ExpandableChannelOptions.propTypes = {

    channel: PropTypes.shape({
        name: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired
    }).isRequired,
    handleCopyFail: PropTypes.func.isRequired,
    handleCopySuccess: PropTypes.func.isRequired
}

export default ExpandableChannelOptions;