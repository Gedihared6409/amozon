import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkydzub0xwrnMaJ5IOxy6xuDWizwVoEZI",
  authDomain: "fir-78dac.firebaseapp.com",
  projectId: "fir-78dac",
  storageBucket: "fir-78dac.appspot.com",
  messagingSenderId: "397888247725",
  appId: "1:397888247725:web:f47a1410a4ed2db7abf324",
  measurementId: "G-17PC5ZRLZ5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };