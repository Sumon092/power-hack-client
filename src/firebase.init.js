// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDWjfrU4iTzrvCdjwsvgOZY_BfOPFw7sx8",
    authDomain: "power-hack-e3380.firebaseapp.com",
    projectId: "power-hack-e3380",
    storageBucket: "power-hack-e3380.appspot.com",
    messagingSenderId: "80866672190",
    appId: "1:80866672190:web:dd8403c70f88239d101b6f",
    measurementId: "G-YRX849767V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);