// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import { getAuth } from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL9DYGTgVT_Xb99G_oeOGjmujVPW-unNM",
  authDomain: "react-native-intro-fe50f.firebaseapp.com",
  projectId: "react-native-intro-fe50f",
  storageBucket: "react-native-intro-fe50f.appspot.com",
  messagingSenderId: "840669883826",
  appId: "1:840669883826:web:d69e88f52c22112e1208ab",
  measurementId: "G-F26VR03SBK"
};

// Initialize Firebase
app = firebase.initializeApp(firebaseConfig);


const auth = getAuth();

export { auth }

// const analytics = getAnalytics(app);