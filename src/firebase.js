import firebase from "firebase/compat/app"
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAQsUDpfD2evusBQNn4fESk75vQ7nYdepk",
    authDomain: "linkedin-clone-eb330.firebaseapp.com",
    projectId: "linkedin-clone-eb330",
    storageBucket: "linkedin-clone-eb330.appspot.com",
    messagingSenderId: "1053124335350",
    appId: "1:1053124335350:web:dbf20be3ea3505a0c63ed7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export  { db, auth }