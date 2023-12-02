import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBjji68VgTL6DaTvZwMBWSAKmXehuPgHGE",

  authDomain: "fir-22authentication.firebaseapp.com",

  projectId: "fir-22authentication",

  storageBucket: "fir-22authentication.appspot.com",

  messagingSenderId: "542673663076",

  appId: "1:542673663076:web:66809aa175fb177e045b71",

  measurementId: "G-0GEE2T74LH",
  urldatabase:"https://fir-22authentication-default-rtdb.firebaseio.com"

};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);
