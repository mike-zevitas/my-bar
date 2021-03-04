import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBYrFJ_9FkG2_IBtubx-LrAuyeEcbWLFY8",
    authDomain: "mybar-cd440.firebaseapp.com",
    databaseURL: "https://mybar-default-rtdb.firebaseio.com/"
  };
  firebase.initializeApp(config);
  export const auth = firebase.auth;
  export const db = firebase.database();