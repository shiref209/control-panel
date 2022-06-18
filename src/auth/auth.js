import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjpXVV7ZWCIuZfroi2wQbVslaQ54zsIjI",
    authDomain: "control-panel-dbb6b.firebaseapp.com",
    projectId: "control-panel-dbb6b",
    storageBucket: "control-panel-dbb6b.appspot.com",
    messagingSenderId: "67044610965",
    appId: "1:67044610965:web:0f2e9873a547c8bf0e1c9c"
  };

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;