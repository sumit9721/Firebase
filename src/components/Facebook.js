import React from "react";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";
const Facebook = () => {
  const history = useHistory();
  const signInwithFaccebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope("public_profile");
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((re) => {
        console.log(re);
        history.replace("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return <button onClick={signInwithFaccebook}>Sign in with facebook</button>;
};

export default Facebook;
