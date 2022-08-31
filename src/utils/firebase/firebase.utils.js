// Here, I import functions I will need from the firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// My web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAksxGuHQQvHKjrjO_tcRQiqc_Nsy35HeI",
  authDomain: "crwn-clothing-final-ac8bc.firebaseapp.com",
  projectId: "crwn-clothing-final-ac8bc",
  storageBucket: "crwn-clothing-final-ac8bc.appspot.com",
  messagingSenderId: "433910518231",
  appId: "1:433910518231:web:7e3f9ed4a03a0963c37b92",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.error("error", error.message);
    }
  }

  return userDocRef;
};
