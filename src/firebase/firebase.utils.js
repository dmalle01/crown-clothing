import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyARcdK7ZIqwULrXJNnDjriXlqV9j_jJVLI",
    authDomain: "crown-db-4ca4f.firebaseapp.com",
    databaseURL: "https://crown-db-4ca4f.firebaseio.com",
    projectId: "crown-db-4ca4f",
    storageBucket: "crown-db-4ca4f.appspot.com",
    messagingSenderId: "469250801552",
    appId: "1:469250801552:web:1b721915fe0ea516d73d15",
    measurementId: "G-WDMSC3JB7G"
  };

  export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set( {
                displayName, email, createdAt,
                ...additionalData
            })
        }catch(error) {
            console.log('error creating user ' + error.message);
        }
    }
    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
