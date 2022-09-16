// Import the functions you need from the SDKs you need
import firebase from "firebase/app";

import 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8zaTEGlfAfitzOHL0c35GJKvBjmwHa-I",
  authDomain: "aula01-bc5d9.firebaseapp.com",
  databaseURL: "https://aula01-bc5d9-default-rtdb.firebaseio.com",
  projectId: "aula01-bc5d9",
  storageBucket: "aula01-bc5d9.appspot.com",
  messagingSenderId: "192856793476",
  appId: "1:192856793476:web:91c28ec495754ae246fdd1"
};

// Initialize Firebase
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}
export default firebase;