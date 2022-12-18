import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
} from 'firebase/firestore';
//firestore just governs our total database so we need both collection methods and writebatch method 

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

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

//here collection Key is jsut what it is just a kind of users like categories as the key that we saw inside our db so we are going to pass that as a strength(collectionKey)
//and objectToAdd is just like actual documents taht we want o add
//we are going to add external behavious that will be like of async behaviour bcoz we are calling out up onto an api in order to store data 
export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd,
    field
) => {
    //in db what collection key fro which we are looking that is collectionKey
    const collectionRef = collection(db, collectionKey);

    //storing objects in our new clctnref as a new doc, we always pass a databse to batch, batch h elps us to attach a bunch of diff llke writes, deletes, sets whatever we can attach alll of these tp the bacth and only when we are read to fire off the batch does the actual transaction begin
    const batch = writeBatch(db);
    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
    console.log("done");
};

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);
    //this query will give us some objects now that i can get a snapshot from
    const querySnapshot = await getDocs(q);
    //getDocs is just a asynchronous ability to ftech those doc snapshots that we want bcoz now all are encapsulated under this query snapshot
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});

    return categoryMap;
};

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (error) {
            console.log(error.message);
        }
    }
    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password)
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
    onAuthStateChanged(auth, callback);
    // onAuthStateChanged(auth, callback, errorCallback, completedCallback);
