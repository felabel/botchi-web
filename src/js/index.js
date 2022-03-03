// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPP4Gq9K57S6xz_zP5j_ZYBw63Bw5Zgr8",
  authDomain: "botchi-web.firebaseapp.com",
  projectId: "botchi-web",
  storageBucket: "botchi-web.appspot.com",
  messagingSenderId: "49501436207",
  appId: "1:49501436207:web:60407f49fd4297dd8049da",
  measurementId: "G-2WECCPWCG0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// const db = getFirestore(app)
// firebaseConfig.initializeApp(firebaseConfig)
var firebase =  firebase.firebase()
// reference database
firebase.database().ref('contactForm')