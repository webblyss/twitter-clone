import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; 

const firebaseConfig = {
    apiKey: "AIzaSyAdgtAPqSf2qQudhmLwh1g6K8GkW6HQWIA",
    authDomain: "nmc-clone.firebaseapp.com",
    projectId: "nmc-clone",
    storageBucket: "nmc-clone.appspot.com",
    messagingSenderId: "798413265511",
    appId: "1:798413265511:web:c391ca64256ca71921d2c2",
    measurementId: "G-13DKWR44LC"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  export const auth = firebase.auth();
  export const provider = new firebase.auth.GoogleAuthProvider();