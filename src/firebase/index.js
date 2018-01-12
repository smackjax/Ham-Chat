import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCpfnEjERiEB4lZtpbFps2im4_hvLUr0_k",
    authDomain: "frequency-71c7c.firebaseapp.com",
    databaseURL: "https://frequency-71c7c.firebaseio.com",
    projectId: "frequency-71c7c",
    storageBucket: "",
    messagingSenderId: "275622563603"
}

firebase.initializeApp(config);
const database = firebase.database();
const auth = firebase.auth;

export default firebase;

export {
    database,
    auth
}