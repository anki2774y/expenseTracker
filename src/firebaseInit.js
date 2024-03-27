import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3HzQ1xNE_blNffCag3NV1mtTuD2--KDY",
  authDomain: "expensetracker-f010d.firebaseapp.com",
  projectId: "expensetracker-f010d",
  storageBucket: "expensetracker-f010d.appspot.com",
  messagingSenderId: "1083002036280",
  appId: "1:1083002036280:web:57b0cdbadbf3460279c6cd"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
