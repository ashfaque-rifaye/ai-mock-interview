import {} from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getApp, getApps, initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCuAOKPoQqm6B7EAYYxlITpZf0TrSIQfKk",
  authDomain: "ai-mock-interview-d522c.firebaseapp.com",
  projectId: "ai-mock-interview-d522c",
  storageBucket: "ai-mock-interview-d522c.firebasestorage.app",
  messagingSenderId: "274688787423",
  appId: "1:274688787423:web:903e274b485cf61232fa6a",
  measurementId: "G-6S5PE9T8MQ"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};