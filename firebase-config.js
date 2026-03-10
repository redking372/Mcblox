import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAqLisVJ9sgz56z_D0dFR1pOMaV6fFo5tw",
    authDomain: "mcblox-bd512.firebaseapp.com",
    projectId: "mcblox-bd512",
    storageBucket: "mcblox-bd512.firebasestorage.app",
    messagingSenderId: "150494713144",
    appId: "1:150494713144:web:e498abc15700fdb1921dcd",
    measurementId: "G-DXF8M78DRS"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

