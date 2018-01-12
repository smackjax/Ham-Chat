import React from 'react';

export default (WrappedComponent)=>{
    return class WithOpenControls extends React.Component{
        state={ openId: "" }
    
        toggleId = (newId)=>{ 
            const openId = 
                (newId === this.state.openId) ? 
                    "" : newId;
            this.setState({
                openId
            })
        }
        clearId=()=>{this.setState({ openId: "" })}
        
        render(){
            return (
                <WrappedComponent
                {...this.props}
                openId={this.state.openId}
                toggleOpenId={this.toggleId}
                clearOpenId={this.clearId}
                />
            )
        }
    }
}