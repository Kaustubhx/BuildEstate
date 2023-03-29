import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCRAVv_xfB3791_0k3JwRn8xPhfXxFfMrM",
    authDomain: "build-estate-0000.firebaseapp.com",
    projectId: "build-estate-0000",
    storageBucket: "build-estate-0000.appspot.com",
    messagingSenderId: "603855551576",
    appId: "1:603855551576:web:1591b3fe527625c3f5de2d",
    measurementId: "G-1KSVNLSK3Z"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth }