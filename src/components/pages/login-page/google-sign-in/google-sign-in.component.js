import React from 'react';
import { auth } from '../../../firebase';
import './google-sign-in.style.css';

const GoogleProvider = new auth.GoogleAuthProvider();
GoogleProvider.addScope('https://www.googleapis.com/auth/userinfo.profile');

export default (props)=>{

    const handleGoogleSignIn=()=>{
        auth().signInWithRedirect(GoogleProvider)
        .then(success=>{
            console.log("Success: ", success);
        })
        .catch(err=>{
            console.log("Couldn't login through Google: ", err);
        });
    }

    return (
        <button
        onClick={handleGoogleSignIn}
        className="google-sign-in-btn"
        >
            <i className="fa fa-google"></i> 
            <span>Sign in with Google</span>
        </button>
    )
}