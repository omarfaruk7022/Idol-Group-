import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDYXpLlZPED-QRew-MejNdcLtg8H54dgSc",
  authDomain: "idol-group-sfs.firebaseapp.com",
  projectId: "idol-group-sfs",
  storageBucket: "idol-group-sfs.appspot.com",
  messagingSenderId: "754302798520",
  appId: "1:754302798520:web:e005616bccb21555aa424d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;