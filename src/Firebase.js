import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC5V0LJ3dwfMWHHFY51v1f6RoyMLxvxOfk",
  authDomain: "creo-social.firebaseapp.com",
  projectId: "creo-social",
  storageBucket: "creo-social.appspot.com",
  messagingSenderId: "685125851359",
  appId: "1:685125851359:web:3663f2f609a7a42a31b16a",
  measurementId: "G-JHY4BGZN13",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
