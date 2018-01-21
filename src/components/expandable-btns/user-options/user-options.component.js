import React from 'react';
import { auth } from '../../firebase';

import ExpandableIconWrapper from '../_expandable-icon-wrapper/wrapper.component';
import Backdrop from '../_backdrop/backdrop.component';
import actionBtnStyles from '../../_action-btn/action-btn.styles';
import startSize from '../start-size';
import * as colors from '../../../_colors';

class ExpandableUserOptions extends React.Component {
    state={
        isOpen: false,
        usernameString: ""
    }

    componentDidMount(){
        const user = auth().currentUser;
        const usernameString =
            user.displayName ||
            user.email.split("@")[0] || 
            "Mr. Sneaky"

        this.setState({
            usernameString
        });
    }

    handleToggle = () => {
        const isOpen = !this.state.isOpen;
        this.setState({ isOpen });    
    }

    handleSignOut = () => {
        auth().signOut();
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
                    paddingLeft: isOpen ? "" : "6px", 

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
                        fontSize: "20px",
                        marginLeft: "10px"
                    }}
                    className="fa fa-user"/>

                    <span
                    style={{
                        transition: "color .5s",
                        marginLeft: "7px",
                        color: isOpen ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)" 
                    }}
                    >
                        {this.state.usernameString}
                    </span>
                </button>

                <button
                style={{
                    ...actionBtnStyles,
                    minWidth: "120px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    marginTop: "10px",
                }}
                onClick={this.handleSignOut}
                >
                    <i className="fa fa-sign-out"/>
                    <span style={{
                        marginLeft: "5px"
                    }}>
                        Sign Out
                    </span>
                </button>

                { // Renders backdrop to 'close' item if open
                isOpen && ( 
                    <Backdrop onClick={this.handleToggle} />
                )}

            </ExpandableIconWrapper>
        )
    }
}

export default ExpandableUserOptions;