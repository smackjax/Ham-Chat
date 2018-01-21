import React from 'react';
import PropTypes from 'prop-types';
import actionBtnStyles from '../../_action-btn/action-btn.styles';

const absoluteWrapperStyles = {
    ...actionBtnStyles,
    transition: "all .3s",
    position: "absolute",
    overflow: "hidden",
    zIndex: "100"
}

const px = (numb)=>{
    return "" + numb + "px";
}

class ExpandableIconWrapper extends React.Component {

    state={
        maxWidth: "0px",
        maxHeight: "0px",
    }

    componentDidUpdate(){
        const open = this.props.open;
        // Set maxWidth/maxHeight
        const current = this.state;
        const element = this.refs.mainWrapper;
        
        const maxHeight = open ? 
            px((element.scrollHeight + 20)) : 
                this.props.startSize.height;

        const maxWidth = open ? 
            px((element.scrollWidth + 20)) : 
                this.props.startSize.height;
    
        if(
            current.maxHeight !== maxHeight || 
            current.maxWidth !== maxWidth
        ) {
            this.setState({
                maxHeight,
                maxWidth
            })
        }
    }

    render(){
        const isOpen = this.props.open;

        // Starting size of absolute div and placeholder
        const startSize = {
            maxWidth: this.props.startSize.width,
            maxHeight: this.props.startSize.height
        };

        const wrapperStyleOverides =
            {
                padding: isOpen ? "10px" : "0px",
                maxWidth: isOpen ? this.state.maxWidth : startSize.maxWidth,
                maxHeight: isOpen ? this.state.maxHeight : startSize.maxHeight,
                backgroundColor: isOpen ? "rgba(33,33,33,1)" : actionBtnStyles.backgroundColor,
                zIndex: "200",
            }

        const propStyles = 
            this.props.style || {};

        return (
            <div
            style={{
                position: "relative",
                width: startSize.maxWidth,
                height: startSize.maxHeight
            }}
            >
                <div
                ref="mainWrapper"
                style={{
                    ...absoluteWrapperStyles,
                    ...wrapperStyleOverides,
                    ...propStyles
                }}
                >
                {this.props.children}
                </div>
            </div>
        )
    }
}

ExpandableIconWrapper.propTypes = {
    open: PropTypes.bool.isRequired,
    startSize: PropTypes.shape({
        width: PropTypes.string.isRequired,
        height: PropTypes.string.isRequired
    }).isRequired
}

export default ExpandableIconWrapper;