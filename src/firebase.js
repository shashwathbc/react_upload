import firebase from "firebase";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyChTBTW_bFIAlijnNiBMareT8hhuJqKksw",
    authDomain: "my-bookstore-4ad1e.firebaseapp.com",
    projectId: "my-bookstore-4ad1e",
    storageBucket: "my-bookstore-4ad1e.appspot.com",
    messagingSenderId: "372164732722",
    appId: "1:372164732722:web:56394f8d55c8b16ad6192b",
    measurementId: "G-KW2D2YW89K"
  };

  //inisializing the app and passing the config
const firebaseApp = firebase.initializeApp(firebaseConfig);

//seting up database and authentication
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };