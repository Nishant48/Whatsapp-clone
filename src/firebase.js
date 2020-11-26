import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyABpDPV8-HcFNe70TSJ-WybqX03gJH5dbo",
    authDomain: "whats-app-clone-c26d5.firebaseapp.com",
    databaseURL: "https://whats-app-clone-c26d5.firebaseio.com",
    projectId: "whats-app-clone-c26d5",
    storageBucket: "whats-app-clone-c26d5.appspot.com",
    messagingSenderId: "694925308214",
    appId: "1:694925308214:web:197d36322b2ef3a11a4397",
    measurementId: "G-4DKVKC8WXV"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db= firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;