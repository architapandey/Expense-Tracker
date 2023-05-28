import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBao_u0NFwu9qcgw2n1JkoHmRzL5yV7AVE",
  authDomain: "expense-tracker-b8a5f.firebaseapp.com",
  projectId: "expense-tracker-b8a5f",
  storageBucket: "expense-tracker-b8a5f.appspot.com",
  messagingSenderId: "505427799394",
  appId: "1:505427799394:web:b870bd45468850f2c3103b",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
