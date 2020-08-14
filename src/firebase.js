import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAsrK21ikYldOt7KKm3c73KaJpZp-TwPbs",
  authDomain: "master-eats.firebaseapp.com",
  databaseURL: "https://master-eats.firebaseio.com",
  projectId: "master-eats",
  storageBucket: "master-eats.appspot.com",
  messagingSenderId: "728346408113",
  appId: "1:728346408113:web:cadfb11a3fa0f997805e90",
  measurementId: "G-3QVJ7T5GD0"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();