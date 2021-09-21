import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_RIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_RIREBASE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_RIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_RIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_RIREBASE_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_RIREBASE_APPID,
});


export const auth = firebase.auth();
export default app;