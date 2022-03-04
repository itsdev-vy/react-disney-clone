import firebase from "firebase";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE,
    authDomain: "disney-clone-97d85.firebaseapp.com",
    projectId: "disney-clone-97d85",
    storageBucket: "disney-clone-97d85.appspot.com",
    messagingSenderId: "65492409331",
    appId: "1:65492409331:web:976f4347303ca22b8c1086"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;