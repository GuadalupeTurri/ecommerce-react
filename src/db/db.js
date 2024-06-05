
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAnmqINPkmEg1hPmJnxiPdjb8NJnfDA5aY",
    authDomain: "ecommerce-rawshop.firebaseapp.com",
    projectId: "ecommerce-rawshop",
    storageBucket: "ecommerce-rawshop.appspot.com",
    messagingSenderId: "430686791653",
    appId: "1:430686791653:web:fe6525c87870b37fe8310c"
  };
  
// Initialize Firebase
 initializeApp(firebaseConfig);

 const db = getFirestore()
 
 export default db

 