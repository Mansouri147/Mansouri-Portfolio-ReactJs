import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAse5Pi-oKcthAAHovsBl5bbqYgaPH68JA",
    authDomain: "my-reactjs-portfolio.firebaseapp.com",
    databaseURL: "https://my-reactjs-portfolio.firebaseio.com",
    projectId: "my-reactjs-portfolio",
    storageBucket: "my-reactjs-portfolio.appspot.com",
    messagingSenderId: "511695456723",
    appId: "1:511695456723:web:89114c90a5e03bb7600726",
    measurementId: "G-C029H8TDDL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;