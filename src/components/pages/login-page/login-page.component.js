import React from 'react';
import PropTypes from 'prop-types';

import { auth } from '../../firebase';
import Background from '../_background/background.component.js';
import Logo from '../../_logo/logo.component';
import LoginControls from './login-controls/login-controls.component';
import GoogleSignIn from './google-sign-in/google-sign-in.component';

import * as colors from '../_colors';
import './login-page.style.css';


class LoginPage extends React.Component {
    state={
        errorMsg: "",
        newUser: false,
        emailVal: "",
        displayNameVal: "",
        passwordVal: "",
        passwordConfirmVal: "",
    }

    toggleUserType=()=>{
        this.setState({
            errorMsg: "",
            newUser: !this.state.newUser,
            emailVal: "",
            passwordVal: "",
            passwordConfirmVal: ""
        })
    }

    handleEmail=(emailVal)=>{
        this.setState({ 
            emailVal, 
            errorMsg: ""
        })
    }
    handleDisplayName=(displayNameVal)=>{
        this.setState({ 
            displayNameVal, 
            errorMsg: ""
        });
    }
    handlePassword=(dirty)=>{
        const passwordVal = dirty.trim();
        this.setState({ 
            passwordVal,
            errorMsg: ""
        })
    }
    handlePasswordConfirm=(dirty)=>{
        const passwordConfirmVal = dirty.trim();
        this.setState({ 
            passwordConfirmVal,
            errorMsg: ""
        })
    }

    handleSubmit=()=>{
        const {
            newUser,
            emailVal,
            displayNameVal,
            passwordVal,
            passwordConfirmVal 
        } = this.state;

        if(newUser){
            if(passwordVal.length < 5){
                return this.setState({
                    errorMsg: "Password must be at least 5 characters"
                });
            }
            if(passwordVal !== passwordConfirmVal){
                return this.setState({
                    errorMsg: "Passwords don't match"
                })
            }

            // Create user with info
            auth()
            .createUserWithEmailAndPassword(emailVal, passwordVal)
            .then(user=>{
                user.updateProfile({
                    displayName: displayNameVal
                });
            })
            .catch(err=>{
                console.log("Couldn't create user: ", err);
            })
        } else {
            // If not a new user
            auth()
            .signInWithEmailAndPassword(emailVal, passwordVal)
            .catch(err=>{
                console.log("Error: ", err.message);

                // Determines error message
                const code = err.code;
                const msg = 
                    code === "auth/user-not-found" ? 
                        "Could not find user with that email" :
                    code === "auth/invalid-email" ? 
                        "Email address invalid" :
                    code === "auth/wrong-password" ? 
                        "Please check your password" : 
                    "Error. Please try again.";
                    
                this.setError(msg);
            });
        }

    }

    setError=(errorMsg)=>{
        this.setState({ errorMsg });
    }
    render(){

        return (
            <div 
            className="login-page"
            >
                <Background color={colors.lightPrimary} />

                <div 
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "140px",
                    height: "140px",
                    margin: "10px auto",
                    borderRadius: "3000px",
                    backgroundColor: "#efefef",
                    border: "3px solid #efefef",
                    borderColor: colors.primary
                }}
                >
                    <Logo />
                </div>

                { // Renders error message, if present
                this.state.errorMsg && (
                    <div 
                    style={{
                        width: "85%",
                        maxWidth: "300px",
                        margin: "15px auto",
                        padding: "12px",
                        backgroundColor: "#efefef",
                        color: colors.primary,
                        border: "1px solid #efefef",
                        borderColor: colors.primary
                    }}
                    >
                        { this.state.errorMsg }
                    </div>
                )}

                <LoginControls 
                {...this.state}
                handleEmail={this.handleEmail}
                handleDisplayName={this.handleDisplayName}
                handlePassword={this.handlePassword}
                handlePasswordConfirm={this.handlePasswordConfirm}
                toggleUserType={this.toggleUserType}
                confirmSubmit={this.handleSubmit}
                />

                <hr 
                style={{
                    margin: "25px auto", 
                    width: "85%", 
                    borderColor: "#efefef", 
                    borderTopWidth: "0px"
                }}
                />

                <GoogleSignIn />

            </div>
        )
    }
}

LoginPage.propTypes={
    handleEmailSignIn: PropTypes.func,
    handleEmailCreate: PropTypes.func,
    handleGoogleSignIn: PropTypes.func 
}

export default LoginPage