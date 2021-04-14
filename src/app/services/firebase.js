import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'
import 'firebase/firebase-database'

const config = {
  apiKey: "AIzaSyBYrFJ_9FkG2_IBtubx-LrAuyeEcbWLFY8",
  authDomain: "mybar-cd440.firebaseapp.com",
  databaseURL: "https://mybar-cd440-default-rtdb.firebaseio.com",
  projectId: "mybar-cd440",
  storageBucket: "mybar-cd440.appspot.com",
  messagingSenderId: "992615594751",
  appId: "1:992615594751:web:4e047ca41ea401ac832aca",
  measurementId: "G-YMS26KFS5R"
};

firebase.initializeApp(config);

export default firebase;

