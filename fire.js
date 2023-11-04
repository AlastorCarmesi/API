var firebase = require('firebase')

const firebaseConfig = {

    apiKey: "AIzaSyDgpHsiUArp3U8zatUaSfgGHqnwuCyOj_Y",
  
    authDomain: "argossystem-69650.firebaseapp.com",
  
    databaseURL: "https://argossystem-69650-default-rtdb.firebaseio.com",
  
    projectId: "argossystem-69650",
  
    storageBucket: "argossystem-69650.appspot.com",
  
    messagingSenderId: "100388886319",
  
    appId: "1:100388886319:web:8f49a702415560cbc9b3da",
  
    measurementId: "G-WL5H57BFQV"
  };
  
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
// Obtener una instancia de Firestore
module.exports = fire;