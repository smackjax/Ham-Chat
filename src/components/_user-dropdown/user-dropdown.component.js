import React from 'react';
import { auth } from '../firebase';
import './user-dropdown.style.css';

class UserDropdown extends React.Component {
    state={
        open: false
    }
    toggle=()=>{
        this.setState({
            open: !this.state.open
        })
    }

    signOut=()=>{
        auth().signOut()
    }

    render() {
    
        return (
        <div
        className="user-dropdown-wrapper"
        >
            <button
            onClick={this.toggle}
            className="user-dropdown-btn"
            >
                <i className="fa fa-user"></i>
            </button>
            { this.state.open && (
                <div className="user-dropdown-menu">
                    <button 
                    onClick={this.signOut}
                    className="dropdown-item">
                        <i className="fa fa-sign-out"></i>
                        <span>Sign Out</span>
                    </button>
                </div>
            )}
            
        </div>
    )}
}

export default UserDropdown;