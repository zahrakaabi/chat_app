/* ------------------------------------------- */
/*                 DEPENDENCIES                */
/* ------------------------------------------- */
// Packages
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

/* ------------------------------------------- */
/*              FIREBASE CONFIG                */
/* ------------------------------------------- */
// CONSTANTS
const AUTH = {
    apiKey: "AIzaSyBRcgYKJYPeFv0Wcx3egkHCYw8DMD_5tok",
    authDomain: "chat-app-a31ca.firebaseapp.com",
    projectId: "chat-app-a31ca",
    storageBucket: "chat-app-a31ca.appspot.com",
    messagingSenderId: "359739108452",
    appId: "1:359739108452:web:c49fd2fe444e90cbd24371"
};

export const authentification = firebase.initializeApp (AUTH).auth();