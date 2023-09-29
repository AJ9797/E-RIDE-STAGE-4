import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCqiEa6fBjYaQ3E9QhQ5Pk1G76a3vOqshY",
    authDomain: "grumpy-blueberries.firebaseapp.com",
    databaseURL: "https://grumpy-blueberries-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "grumpy-blueberries",
    storageBucket: "grumpy-blueberries.appspot.com",
    messagingSenderId: "916815783484",
    appId: "1:916815783484:web:62b8839414f644df940539",
    measurementId: "G-Y2VPJ4LHZD"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
