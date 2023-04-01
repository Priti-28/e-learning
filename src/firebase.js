//import firebase from 'firebase';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";



const firebaseConfig = {
    apiKey: "AIzaSyB3OsMuCnymTgCB3TI2KpRexKhuw14BMJQ",
    authDomain: "e-learning-app-7e419.firebaseapp.com",
    projectId: "e-learning-app-7e419",
    storageBucket: "e-learning-app-7e419.appspot.com",
    messagingSenderId: "532187519267",
    appId: "1:532187519267:web:4bfe8856c3927d7102d496",
    measurementId: "G-ZVHN0SGDYY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
 const db = firebaseApp.firestore();
 const auth = firebase.auth();
 const provider = new firebase.auth.GoogleAuthProvider();
 const storage = firebase.storage();

 
  // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);

export { auth, provider, storage};
export default db;
