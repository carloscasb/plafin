
  /// ORIGINAL

import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1uH54iOoZ3Dbac6iX4dIsZ7FbxSxYj9Q",
  authDomain: "agendanf-4e6c9.firebaseapp.com",
  databaseURL: "https://agendanf-4e6c9-default-rtdb.firebaseio.com",
  projectId: "agendanf-4e6c9",
  storageBucket: "agendanf-4e6c9.appspot.com",
  messagingSenderId: "266417443319",
  appId: "1:266417443319:web:d20be04eba1bbeec7bdef2"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db;

/**
//IMPORTAR getFirestore , CRIAR UMA CONST (db) PARA ARMAZENAR (app) E EXPORTAR
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
 // databaseURL: "https://agendanf-4e6c9-default-rtdb.firebaseio.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
 // storageBucket: "agendanf-4e6c9.appspot.com",
 // messagingSenderId: "266417443319",
 // appId: "1:266417443319:web:d20be04eba1bbeec7bdef2"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db;

*/
