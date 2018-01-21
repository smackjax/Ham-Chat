import React from 'react';
import * as colors from '../../_colors';
import './chat-box.style.css';

export default class ChatBox extends React.Component {
    state={
        newMsg: ""
    }

    handleSubmit=(e)=>{
        // Catches e if submitted
        if(e) e.preventDefault();

        const text = this.state.newMsg
        this.setState({newMsg: ""});
        this.props.handleSubmit(text);
    }

    handleMsg=(e)=>{
        const newMsg = e.target.value;
        // Catch Enter press and submit
        this.setState({ newMsg });
    }

    checkEnter=(e)=>{
        if(e.key === "Enter") {
            e.preventDefault();
            this.handleSubmit();
        }
    }

    render(){   
        return (
            <form 
            onSubmit={this.handleSubmit}
            onKeyDown={this.checkEnter}
            className="chat-box-wrapper"
            >
                <textarea  
                    className="chat-text-area"
                    name="chatText"
                    resizable="no"
                    required
                    onChange={this.handleMsg}
                    value={this.state.newMsg}
                    placeholder="Type message here..."
                />

                <button type="submit"
                style={{
                    backgroundColor: colors.primary,
                    minWidth: "45px"
                }}
                value="Send"
                className="chat-submit-btn"
                >
                    <i className="fa fa-paper-plane"/>
                </button>
            </form>
        )
    }
}