import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgvEnFGXI-SJQpDYbYDno_4_f-5eS_QtM",
  authDomain: "family-app-2024.firebaseapp.com",
  projectId: "family-app-2024",
  storageBucket: "family-app-2024.firebasestorage.app",
  messagingSenderId: "478052382562",
  appId: "1:478052382562:web:2769ec643ae433f794de3b",
  measurementId: "G-ZK9CNWR2CF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);