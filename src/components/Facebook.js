import React from "react";
import { signInWithPopup, FacebookAuthProvider } from "firebase-tools";
import { authentication } from "../firebase";
const facebook = () => {
  const signInwithFaccebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(authentication, provider)
      .then((re) => {
        console.log(re);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return <button onClick={signInwithFaccebook}>Sign in with facebook</button>;
};

export default facebook;
