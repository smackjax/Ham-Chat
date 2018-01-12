import * as firebase from 'firebase';
import config from './config';

firebase.initializeApp(config);
const database = firebase.database();
const auth = firebase.auth;

export default firebase;

export {
    database,
    auth
}