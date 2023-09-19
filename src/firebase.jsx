import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBjS3jKCyZ7W4h7mQmJSI9qgFRIMHYyQI0",
  authDomain: "bobsousa-255b9.firebaseapp.com",
  projectId: "bobsousa-255b9",
  storageBucket: "bobsousa-255b9.appspot.com",
  messagingSenderId: "750803350458",
  appId: "1:750803350458:web:fe58cdcfaebf9959626383",
  measurementId: "G-BVM08P8YT4",
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, functions, provider };
