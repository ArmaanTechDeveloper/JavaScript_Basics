const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyDEDBFdsMhagRAEwL-HLDbmbBudmvPRSyU",
    authDomain: "recipes-ea87f.firebaseapp.com",
    databaseURL: "https://recipes-ea87f-default-rtdb.firebaseio.com",
    projectId: "recipes-ea87f",
    storageBucket: "recipes-ea87f.appspot.com",
    messagingSenderId: "208464505616",
    appId: "1:208464505616:web:1c4beb1b998b1d5af49395",
    measurementId: "G-J0GP9F6X7S"
};

firebase.initializeAoo(firebaseConfig);
const db = firebase.firestore();
const User = db.collection('books')
module.exports = User