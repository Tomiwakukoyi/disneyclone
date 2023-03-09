import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKMO3IL_wcueAbz-LWJ5njyStyW8SltKM",
  authDomain: "disney-clone-13259.firebaseapp.com",
  projectId: "disney-clone-13259",
  storageBucket: "disney-clone-13259.appspot.com",
  messagingSenderId: "793175281245",
  appId: "1:793175281245:web:a870be6caaf64025d047b4",
  measurementId: "G-MJ00GNK56T",
};

const firebaseApp = initializeApp(firebaseConfig); //lets me initialize the firebase app
const db = getFirestore(firebaseApp); //connnecting to the database
const auth = getAuth(); //im using firebase authentication
const provider = new GoogleAuthProvider(); //google is providing me the authentication
const storage = getStorage(); //storage for pictures and videos

console.log(firebaseApp);

export { auth, provider, storage };
export default db;
