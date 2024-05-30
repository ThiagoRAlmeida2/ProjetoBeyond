import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC7ZaGSQeuiP485li_FenzYoEbfKee0BeI",
    authDomain: "forum-bayond.firebaseapp.com",
    projectId: "forum-bayond",
    storageBucket: "forum-bayond.appspot.com",
    messagingSenderId: "885011030687",
    appId: "1:885011030687:web:3b3249805d5c7e1a1a38aa",
    measurementId: "G-0XTMBM82WZ"
};


const app = initializeApp(firebaseConfig);

getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
