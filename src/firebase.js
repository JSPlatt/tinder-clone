import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyA6BH6ZkaCg0A3kKQCMpCuG9sFDUawDbKI",
    authDomain: "tinder-clone-f1794.firebaseapp.com",
    databaseURL: "https://tinder-clone-f1794-default-rtdb.firebaseio.com",
    projectId: "tinder-clone-f1794",
    storageBucket: "tinder-clone-f1794.appspot.com",
    messagingSenderId: "1023050880409",
    appId: "1:1023050880409:web:2e9392986014f02b7cef08",
    measurementId: "G-JL1RZF1HJH"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebaseApp.firestore()

export default database