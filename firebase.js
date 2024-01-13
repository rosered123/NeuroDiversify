import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEXR2eNFi-baST2BEe7WJQKR9L6NVTlwg",
    authDomain: "spectrum-sources-a9a8a.firebaseapp.com",
    projectId: "spectrum-sources-a9a8a",
    storageBucket: "spectrum-sources-a9a8a.appspot.com",
    messagingSenderId: "255803400426",
    appId: "1:255803400426:web:a03d5b870f2dc7031d7793"
};

// Initialize Firebase
let app;
if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApps()[0];
}

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
