import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCHjGeBecLkj-a4LjCd93PUlmBJqeLplDI",
  authDomain: "registration-form-ed22a.firebaseapp.com",
  databaseURL: "https://registration-form-ed22a-default-rtdb.firebaseio.com",
  projectId: "registration-form-ed22a",
  storageBucket: "registration-form-ed22a.appspot.com",
  messagingSenderId: "1008578671743",
  appId: "1:1008578671743:web:ad9c0f05b7f858c44ebb4a",
  measurementId: "G-QHFCRDVKH5",
});

export const auth = app.auth();
export default app;
