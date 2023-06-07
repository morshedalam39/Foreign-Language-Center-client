// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: import.meta.env.VITE_apiKey,
    // authDomain: import.meta.env.VITE_authDomain,
    // projectId: import.meta.env.VITE_projectId,
    // storageBucket: import.meta.env.VITE_storageBucket,
    // messagingSenderId: import.meta.env.VITE_messagingSenderId,
    // appId: import.meta.env.VITE_appId
    apiKey: "AIzaSyDA0iO0McXE9C7Pj27Z1bo6SfyAocB7EnE",
    authDomain: "foreign-language-center.firebaseapp.com",
    projectId: "foreign-language-center",
    storageBucket: "foreign-language-center.appspot.com",
    messagingSenderId: "666906744710",
    appId: "1:666906744710:web:5ebebde5b013b0245bfe07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;