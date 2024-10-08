import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  createUserWithEmailAndPassword
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAk6hLddPbZ5R7j_LBsFDDSZT64MVHrQjI',
  authDomain: 'nest-ondc.firebaseapp.com',
  projectId: 'nest-ondc',
  storageBucket: 'nest-ondc.appspot.com',
  messagingSenderId: '318997633599',
  appId: '1:318997633599:web:41937faa0dda917365b68a',
  measurementId: 'G-26EE7FZZZE'
};


const app = initializeApp(firebaseConfig);


const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
auth.languageCode = 'en'; 
export {
  app,
  db,
  storage,
  auth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  createUserWithEmailAndPassword
};
