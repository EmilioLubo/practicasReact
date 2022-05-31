import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAKrVnRJu9jH_HofHyfKpTBHunb0AImbng",
  authDomain: "thunderstore-23f3e.firebaseapp.com",
  projectId: "thunderstore-23f3e",
  storageBucket: "thunderstore-23f3e.appspot.com",
  messagingSenderId: "791144544687",
  appId: "1:791144544687:web:c4f298521363fa702d175a",
  measurementId: "G-XS0WZETXW9"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;