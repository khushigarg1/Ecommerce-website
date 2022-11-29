import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4v7sbgIcy8DHEo6eOoujfVDsqOzCpILM",
    authDomain: "ecommercewebsite-386c1.firebaseapp.com",
    projectId: "ecommercewebsite-386c1",
    storageBucket: "ecommercewebsite-386c1.appspot.com",
    messagingSenderId: "509000781763",
    appId: "1:509000781763:web:d0dee364c4fa29e5e3b776"
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);