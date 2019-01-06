import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyAMzMQ7d9R3VySOCMBqvUncIPtMCQjPWpg",
    authDomain: "react-firebase-authentic-99189.firebaseapp.com",
    databaseURL: "https://react-firebase-authentic-99189.firebaseio.com",
    projectId: "react-firebase-authentic-99189",
    storageBucket: "react-firebase-authentic-99189.appspot.com",
    messagingSenderId: "347141442179"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

const db = firebase.database();
const auth = firebase.auth();



export {
  auth,
  db,
};