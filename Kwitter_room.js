// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCckSDoCtY2xHki4WPz1yg1RT7LXMuL9PM",
    authDomain: "letschatapp-ff224.firebaseapp.com",
    projectId: "letschatapp-ff224",
    storageBucket: "letschatapp-ff224.appspot.com",
    messagingSenderId: "746681607103",
    appId: "1:746681607103:web:8cc50d5082211f62c7b70a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}