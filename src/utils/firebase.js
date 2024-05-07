// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGqNv4gmu8eeGgtK7MebhcyCNkVwiKWec",
  authDomain: "netflixgpt-bcbf0.firebaseapp.com",
  projectId: "netflixgpt-bcbf0",
  storageBucket: "netflixgpt-bcbf0.appspot.com",
  messagingSenderId: "317474612092",
  appId: "1:317474612092:web:0b44f6dc54e5933ecefaf9",
  measurementId: "G-RVGQPJLNK7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();