import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCInJNgp79QdBLuUS97mHBS-xpI_1Hc5fs",
    authDomain: "facebook-clone-d2260.firebaseapp.com",
    databaseURL: "https://facebook-clone-d2260.firebaseio.com",
    projectId: "facebook-clone-d2260",
    storageBucket: "facebook-clone-d2260.appspot.com",
    messagingSenderId: "269967753895",
    appId: "1:269967753895:web:7a01eec1d76a5b2e599182",
    measurementId: "G-FHJBZ96TT5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;