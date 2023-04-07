import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCcW0QVPq6TCd4ttbGIeW6o_YqDFx-WIo",
  authDomain: "react-hooks-blog-ae0b5.firebaseapp.com",
  projectId: "react-hooks-blog-ae0b5",
  storageBucket: "react-hooks-blog-ae0b5.appspot.com",
  messagingSenderId: "527985196393",
  appId: "1:527985196393:web:92c400cf79067062ecd1f8",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
